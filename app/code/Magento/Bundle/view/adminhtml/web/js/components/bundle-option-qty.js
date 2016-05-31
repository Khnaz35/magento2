/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Ui/js/form/element/abstract'
], function (Abstract) {
    'use strict';

    return Abstract.extend({
        defaults: {
            valueUpdate: 'input',
            isInteger: true
        },

        /**
         * update event
         */
        onUpdate: function () {
            if (this.initialValue === this.value()) {
                this.bubble('update', false);
                this.validate();

                return;
            }

            this.bubble('update', this.hasChanged());
            this.validation['validate-number'] = true;
            this.validation['validate-digits'] = this.isInteger;
            this.validate();
        }
    });
});
