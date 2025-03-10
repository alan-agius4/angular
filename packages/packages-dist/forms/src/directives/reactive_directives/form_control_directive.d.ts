/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { EventEmitter, InjectionToken, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormControl } from '../../model/form_control';
import { ControlValueAccessor } from '../control_value_accessor';
import { NgControl } from '../ng_control';
import { SetDisabledStateOption } from '../shared';
import { AsyncValidator, AsyncValidatorFn, Validator, ValidatorFn } from '../validators';
import * as i0 from "@angular/core";
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */
export declare const NG_MODEL_WITH_FORM_CONTROL_WARNING: InjectionToken<unknown>;
/**
 * @description
 * Synchronizes a standalone `FormControl` instance to a form control element.
 *
 * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives was deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 *
 * @see [Reactive Forms Guide](guide/forms/reactive-forms)
 * @see {@link FormControl}
 * @see {@link AbstractControl}
 *
 * @usageNotes
 *
 * The following example shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
export declare class FormControlDirective extends NgControl implements OnChanges, OnDestroy {
    private _ngModelWarningConfig;
    private callSetDisabledState?;
    /**
     * Internal reference to the view model value.
     * @nodoc
     */
    viewModel: any;
    /**
     * @description
     * Tracks the `FormControl` instance bound to the directive.
     */
    form: FormControl;
    /**
     * @description
     * Triggers a warning in dev mode that this input should not be used with reactive forms.
     */
    set isDisabled(isDisabled: boolean);
    /** @deprecated as of v6 */
    model: any;
    /** @deprecated as of v6 */
    update: EventEmitter<any>;
    constructor(validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[], valueAccessors: ControlValueAccessor[], _ngModelWarningConfig: string | null, callSetDisabledState?: SetDisabledStateOption | undefined);
    /** @nodoc */
    ngOnChanges(changes: SimpleChanges): void;
    /** @nodoc */
    ngOnDestroy(): void;
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path(): string[];
    /**
     * @description
     * The `FormControl` bound to this directive.
     */
    get control(): FormControl;
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    viewToModelUpdate(newValue: any): void;
    private _isControlChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormControlDirective, [{ optional: true; self: true; }, { optional: true; self: true; }, { optional: true; self: true; }, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormControlDirective, "[formControl]", ["ngForm"], { "form": { "alias": "formControl"; "required": false; }; "isDisabled": { "alias": "disabled"; "required": false; }; "model": { "alias": "ngModel"; "required": false; }; }, { "update": "ngModelChange"; }, never, never, false, never>;
}
