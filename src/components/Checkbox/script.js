import Checkable from 'inkline/components/Checkable';
import SchemaProviderMixin from 'inkline/mixins/forms/providers/SchemaProviderMixin';

import NamePropertyMixin from 'inkline/mixins/forms/properties/NamePropertyMixin';

export default {
    name: 'ICheckbox',
    extends: Checkable,
    mixins: [
        SchemaProviderMixin,

        NamePropertyMixin
    ],
    props: {
        value: {
            type: [Boolean, String],
            default: false
        },
        indeterminate: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        checked () {
            if (Array.isArray(this.model)) {
                return this.model.indexOf(this.currentValue) !== -1;
            } else if (this.model !== null && this.model !== undefined) {
                return this.model === this.currentValue;
            }
        }
    },
    mounted () {
        if (this.indeterminate) {
            this.$el.setAttribute('aria-controls', this.controls);
        }
    }
};
