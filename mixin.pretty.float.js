'use strict';

module.exports = {
    getFormattedFloat: function(value, precision, localize) {
        value = value || "";
        precision = precision || 0;
        localize = localize || false;

        var rounded,
            trimmed;

        var rounded = (!isNaN(precision) && parseInt(precision, 10) > 0)
            ? parseFloat(value).toFixed(parseInt(precision, 10))
            : this.props.value;

        trimmed = parseFloat(rounded).toString();

        if (localize && !isNaN(trimmed)) {
            return parseFloat(trimmed).toLocaleString();
        }

        return trimmed;
    },
};
