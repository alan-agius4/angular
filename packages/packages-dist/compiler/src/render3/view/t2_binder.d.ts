/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AST } from '../../expression_parser/ast';
import { SelectorMatcher } from '../../selector';
import { BoundAttribute, BoundEvent, BoundText, Content, DeferredBlock, DeferredBlockError, DeferredBlockLoading, DeferredBlockPlaceholder, DeferredTrigger, Element, ForLoopBlock, ForLoopBlockEmpty, Icu, IfBlock, IfBlockBranch, LetDeclaration, Node, Reference, SwitchBlock, SwitchBlockCase, Template, Text, TextAttribute, UnknownBlock, Variable, Visitor } from '../r3_ast';
import { BoundTarget, DirectiveMeta, ReferenceTarget, ScopedNode, Target, TargetBinder, TemplateEntity } from './t2_api';
/** Shorthand for a map between a binding AST node and the entity it's targeting. */
type BindingsMap<DirectiveT> = Map<BoundAttribute | BoundEvent | TextAttribute, DirectiveT | Template | Element>;
/** Shorthand for a map between a reference AST node and the entity it's targeting. */
type ReferenceMap<DirectiveT> = Map<Reference, Template | Element | {
    directive: DirectiveT;
    node: Element | Template;
}>;
/** Mapping between AST nodes and the directives that have been matched on them. */
type MatchedDirectives<DirectiveT> = Map<Template | Element, DirectiveT[]>;
/**
 * Mapping between a scoped not and the template entities that exist in it.
 * `null` represents the root scope.
 */
type ScopedNodeEntities = Map<ScopedNode | null, Set<TemplateEntity>>;
/** Shorthand tuple type where a defer block is paired with its corresponding scope. */
type DeferBlockScopes = [DeferredBlock, Scope][];
/**
 * Given a template string and a set of available directive selectors,
 * computes a list of matching selectors and splits them into 2 buckets:
 * (1) eagerly used in a template and (2) directives used only in defer
 * blocks. Similarly, returns 2 lists of pipes (eager and deferrable).
 *
 * Note: deferrable directives selectors and pipes names used in `@defer`
 * blocks are **candidates** and API caller should make sure that:
 *
 *  * A Component where a given template is defined is standalone
 *  * Underlying dependency classes are also standalone
 *  * Dependency class symbols are not eagerly used in a TS file
 *    where a host component (that owns the template) is located
 */
export declare function findMatchingDirectivesAndPipes(template: string, directiveSelectors: string[]): {
    directives: {
        regular: string[];
        deferCandidates: string[];
    };
    pipes: {
        regular: string[];
        deferCandidates: string[];
    };
};
/**
 * Processes `Target`s with a given set of directives and performs a binding operation, which
 * returns an object similar to TypeScript's `ts.TypeChecker` that contains knowledge about the
 * target.
 */
export declare class R3TargetBinder<DirectiveT extends DirectiveMeta> implements TargetBinder<DirectiveT> {
    private directiveMatcher;
    constructor(directiveMatcher: SelectorMatcher<DirectiveT[]>);
    /**
     * Perform a binding operation on the given `Target` and return a `BoundTarget` which contains
     * metadata about the types referenced in the template.
     */
    bind(target: Target): BoundTarget<DirectiveT>;
}
/**
 * Represents a binding scope within a template.
 *
 * Any variables, references, or other named entities declared within the template will
 * be captured and available by name in `namedEntities`. Additionally, child templates will
 * be analyzed and have their child `Scope`s available in `childScopes`.
 */
declare class Scope implements Visitor {
    readonly parentScope: Scope | null;
    readonly rootNode: ScopedNode | null;
    /**
     * Named members of the `Scope`, such as `Reference`s or `Variable`s.
     */
    readonly namedEntities: Map<string, TemplateEntity>;
    /**
     * Set of elements that belong to this scope.
     */
    readonly elementsInScope: Set<Element>;
    /**
     * Child `Scope`s for immediately nested `ScopedNode`s.
     */
    readonly childScopes: Map<ScopedNode, Scope>;
    /** Whether this scope is deferred or if any of its ancestors are deferred. */
    readonly isDeferred: boolean;
    private constructor();
    static newRootScope(): Scope;
    /**
     * Process a template (either as a `Template` sub-template with variables, or a plain array of
     * template `Node`s) and construct its `Scope`.
     */
    static apply(template: Node[]): Scope;
    /**
     * Internal method to process the scoped node and populate the `Scope`.
     */
    private ingest;
    visitElement(element: Element): void;
    visitTemplate(template: Template): void;
    visitVariable(variable: Variable): void;
    visitReference(reference: Reference): void;
    visitDeferredBlock(deferred: DeferredBlock): void;
    visitDeferredBlockPlaceholder(block: DeferredBlockPlaceholder): void;
    visitDeferredBlockError(block: DeferredBlockError): void;
    visitDeferredBlockLoading(block: DeferredBlockLoading): void;
    visitSwitchBlock(block: SwitchBlock): void;
    visitSwitchBlockCase(block: SwitchBlockCase): void;
    visitForLoopBlock(block: ForLoopBlock): void;
    visitForLoopBlockEmpty(block: ForLoopBlockEmpty): void;
    visitIfBlock(block: IfBlock): void;
    visitIfBlockBranch(block: IfBlockBranch): void;
    visitContent(content: Content): void;
    visitLetDeclaration(decl: LetDeclaration): void;
    visitBoundAttribute(attr: BoundAttribute): void;
    visitBoundEvent(event: BoundEvent): void;
    visitBoundText(text: BoundText): void;
    visitText(text: Text): void;
    visitTextAttribute(attr: TextAttribute): void;
    visitIcu(icu: Icu): void;
    visitDeferredTrigger(trigger: DeferredTrigger): void;
    visitUnknownBlock(block: UnknownBlock): void;
    private maybeDeclare;
    /**
     * Look up a variable within this `Scope`.
     *
     * This can recurse into a parent `Scope` if it's available.
     */
    lookup(name: string): TemplateEntity | null;
    /**
     * Get the child scope for a `ScopedNode`.
     *
     * This should always be defined.
     */
    getChildScope(node: ScopedNode): Scope;
    private ingestScopedNode;
}
/**
 * Metadata container for a `Target` that allows queries for specific bits of metadata.
 *
 * See `BoundTarget` for documentation on the individual methods.
 */
export declare class R3BoundTarget<DirectiveT extends DirectiveMeta> implements BoundTarget<DirectiveT> {
    readonly target: Target;
    private directives;
    private eagerDirectives;
    private bindings;
    private references;
    private exprTargets;
    private symbols;
    private nestingLevel;
    private scopedNodeEntities;
    private usedPipes;
    private eagerPipes;
    /** Deferred blocks, ordered as they appear in the template. */
    private deferredBlocks;
    /** Map of deferred blocks to their scope. */
    private deferredScopes;
    constructor(target: Target, directives: MatchedDirectives<DirectiveT>, eagerDirectives: DirectiveT[], bindings: BindingsMap<DirectiveT>, references: ReferenceMap<DirectiveT>, exprTargets: Map<AST, TemplateEntity>, symbols: Map<TemplateEntity, Template>, nestingLevel: Map<ScopedNode, number>, scopedNodeEntities: ScopedNodeEntities, usedPipes: Set<string>, eagerPipes: Set<string>, rawDeferred: DeferBlockScopes);
    getEntitiesInScope(node: ScopedNode | null): ReadonlySet<TemplateEntity>;
    getDirectivesOfNode(node: Element | Template): DirectiveT[] | null;
    getReferenceTarget(ref: Reference): ReferenceTarget<DirectiveT> | null;
    getConsumerOfBinding(binding: BoundAttribute | BoundEvent | TextAttribute): DirectiveT | Element | Template | null;
    getExpressionTarget(expr: AST): TemplateEntity | null;
    getDefinitionNodeOfSymbol(symbol: TemplateEntity): ScopedNode | null;
    getNestingLevel(node: ScopedNode): number;
    getUsedDirectives(): DirectiveT[];
    getEagerlyUsedDirectives(): DirectiveT[];
    getUsedPipes(): string[];
    getEagerlyUsedPipes(): string[];
    getDeferBlocks(): DeferredBlock[];
    getDeferredTriggerTarget(block: DeferredBlock, trigger: DeferredTrigger): Element | null;
    isDeferred(element: Element): boolean;
    /**
     * Finds an entity with a specific name in a scope.
     * @param rootNode Root node of the scope.
     * @param name Name of the entity.
     */
    private findEntityInScope;
    /** Coerces a `ReferenceTarget` to an `Element`, if possible. */
    private referenceTargetToElement;
}
export {};
