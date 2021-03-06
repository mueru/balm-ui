/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { __extends } from "tslib";
import { MDCChipActionType } from './constants';
import { MDCChipActionFoundation } from './foundation';
/**
 * MDCChipTrailingActionFoundation provides the business logic for the trailing
 * chip action.
 */
var MDCChipTrailingActionFoundation = /** @class */ (function (_super) {
    __extends(MDCChipTrailingActionFoundation, _super);
    function MDCChipTrailingActionFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipTrailingActionFoundation.prototype.isSelectable = function () {
        return false;
    };
    MDCChipTrailingActionFoundation.prototype.actionType = function () {
        return MDCChipActionType.TRAILING;
    };
    MDCChipTrailingActionFoundation.prototype.shouldEmitInteractionOnRemoveKey = function () {
        return true;
    };
    return MDCChipTrailingActionFoundation;
}(MDCChipActionFoundation));
export { MDCChipTrailingActionFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipTrailingActionFoundation;
//# sourceMappingURL=trailing-foundation.js.map