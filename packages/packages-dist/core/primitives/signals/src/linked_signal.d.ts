/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { defaultEquals, ValueEqualityFn } from './equality';
import { ReactiveNode, SIGNAL } from './graph';
export type ComputationFn<S, D> = (source: S, previous?: {
    source: S;
    value: D;
}) => D;
export interface LinkedSignalNode<S, D> extends ReactiveNode {
    /**
     * Value of the source signal that was used to derive the computed value.
     */
    sourceValue: S;
    /**
     * Current state value, or one of the sentinel values (`UNSET`, `COMPUTING`,
     * `ERROR`).
     */
    value: D;
    /**
     * If `value` is `ERRORED`, the error caught from the last computation attempt which will
     * be re-thrown.
     */
    error: unknown;
    /**
     * The source function represents reactive dependency based on which the linked state is reset.
     */
    source: () => S;
    /**
     * The computation function which will produce a new value based on the source and, optionally - previous values.
     */
    computation: ComputationFn<S, D>;
    equal: ValueEqualityFn<D>;
}
export type LinkedSignalGetter<S, D> = (() => D) & {
    [SIGNAL]: LinkedSignalNode<S, D>;
};
export declare function createLinkedSignal<S, D>(sourceFn: () => S, computationFn: ComputationFn<S, D>, equalityFn?: ValueEqualityFn<D>): LinkedSignalGetter<S, D>;
export declare function linkedSignalSetFn<S, D>(node: LinkedSignalNode<S, D>, newValue: D): void;
export declare function linkedSignalUpdateFn<S, D>(node: LinkedSignalNode<S, D>, updater: (value: D) => D): void;
export declare const LINKED_SIGNAL_NODE: {
    value: any;
    dirty: boolean;
    error: null;
    equal: typeof defaultEquals;
    producerMustRecompute(node: LinkedSignalNode<unknown, unknown>): boolean;
    producerRecomputeValue(node: LinkedSignalNode<unknown, unknown>): void;
    version: number & {
        __brand: "Version";
    };
    lastCleanEpoch: number & {
        __brand: "Version";
    };
    producerNode: ReactiveNode[] | undefined;
    producerLastReadVersion: (number & {
        __brand: "Version";
    })[] | undefined;
    producerIndexOfThis: number[] | undefined;
    nextProducerIndex: number;
    liveConsumerNode: ReactiveNode[] | undefined;
    liveConsumerIndexOfThis: number[] | undefined;
    consumerAllowSignalWrites: boolean;
    consumerIsAlwaysLive: boolean;
    consumerMarkedDirty(node: unknown): void;
    consumerOnSignalRead(node: unknown): void;
    debugName?: string;
    kind: string;
};
