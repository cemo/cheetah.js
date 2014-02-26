window._p = {};
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.DataSourceLocale) {
        $.ig.DataSourceLocale = {};
        $.extend($.ig.DataSourceLocale, {
            locale: {
                invalidDataSource: 'The supplied data source is invalid. It happens to be a scalar.',
                unknownDataSource: 'Cannot determine the data source type. Please specify if it is JSON or XML data.',
                errorParsingArrays: 'There was an error parsing the array data and applying the defined data schema: ',
                errorParsingJson: 'There was an error parsing the JSON data and applying the defined data schema: ',
                errorParsingXml: 'There was an error parsing the XML data and applying the defined data schema: ',
                errorParsingHtmlTable: 'There was an error extracting the data from the HTML Table and applying the schema : ',
                errorExpectedTbodyParameter: 'Expected a tbody or a table as a parameter.',
                errorTableWithIdNotFound: 'The HTML Table with the following ID was not found: ',
                errorParsingHtmlTableNoSchema: 'There was an error parsing the Table DOM: ',
                errorParsingJsonNoSchema: 'There was an error parsing/evaluating the JSON string: ',
                errorParsingXmlNoSchema: 'There was an error parsing the XML string: ',
                errorXmlSourceWithoutSchema: 'The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ',
                errorUnrecognizedFilterCondition: ' The filter condition that was passed was not recognized: ',
                errorRemoteRequest: 'The remote request to fetch data has failed: ',
                errorSchemaMismatch: 'The input data doesn\'t match the schema, the following field couldn\'t be mapped: ',
                errorSchemaFieldCountMismatch: 'The input data doesn\'t match the schema in terms of number of fields. ',
                errorUnrecognizedResponseType: 'The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.',
                hierarchicalTablesNotSupported: 'Tables are not supported for HierarchicalSchema',
                cannotBuildTemplate: 'The jQuery template could not be built. There are no records present in the data source, and no columns defined.',
                unrecognizedCondition: 'Unrecognized filtering condition in the following expression: ',
                fieldMismatch: 'The following expression contains an invalid field or filtering condition: ',
                noSortingFields: 'There are no fields specified. You need to specify at least one field to sort by, when calling sort().',
                filteringNoSchema: 'There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source.'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Chart) {
        $.ig.Chart = {};
        $.extend($.ig.Chart, {
            locale: {
                seriesName: 'must specify series name option when setting options.',
                axisName: 'must specify axis name option when setting options.',
                invalidLabelBinding: 'There is no such value for the labels to bind.',
                close: 'Close',
                overview: 'Overview',
                zoomOut: 'Zoom Out',
                zoomIn: 'Zoom In',
                resetZoom: 'Reset Zoom'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.SharedLocale) {
        $.ig.SharedLocale = {};
        $.extend($.ig.SharedLocale, { locale: {} });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Templating) {
        $.ig.Templating = {};
        $.extend($.ig.Templating, { locale: { undefinedArgument: 'An error has occurred while trying to retrieve data source property: ' } });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Barcode) {
        $.ig.Barcode = {
            locale: {
                aILength: 'The AI should have at least 2 digits.',
                badFormedUCCValue: 'The Data property value of the UCC barcode is not well formed. It should look like (AI)GTIN.',
                code39_NonNumericError: 'The character \'{0}\' is invalid for CODE39 Data property value. The valid ones are: {1}',
                countryError: 'Error converting Country property value code. It should be a numeric value.',
                emptyValueMsg: 'The Data property value is empty.',
                encodingError: 'Error in the convertion. Refer to the documentation for the valid property values.',
                errorMessageText: 'Invalid value! Reference the documentation for the valid barcode Data property value structure.',
                gS1ExMaxAlphanumNumber: 'The GS1 DataBar Expanded family can encode up to 41 alphanumeric characters.',
                gS1ExMaxNumericNumber: 'The GS1 DataBar Expanded family can encode up to 74 numeric characters.',
                gS1Length: 'The GS1 DataBar Data property value is used for GTIN - 8, 12, 13, 14 and its length should be 7, 11, 12 or 13. The last digit is reserved for a check sum.',
                gS1LimitedFirstChar: 'GS1 DataBar Limited barcode should have 0 or 1 in the first digit. When encoding GTIN-14 data with an Indicator value greater than 1, Omnidirectional, Stacked, Stacked Omnidirectional or Truncated barcode type must be used.',
                i25Length: 'The Interleaved2of5 barcode should have even number of digits. You can put 0 in the front of it if they are odd number.',
                intelligentMailLength: 'The length of the Intelligent Mail barcode Data property value should be 20, 25, 29 or 31 characters - 20 digits track code (2 for barcode identifier, 3 for service type identifier, 6 or 9 for mailer identifier and 9 or 6 for serial number) and 0, 5, 9 or 11 zip code symbols.',
                intelligentMailSecondDigit: 'The second digit should be in the range of 0-4.',
                invalidAI: 'Invalid Application Identifier element strings. Please, ensure that the AI string in the Data property value is well formed.',
                invalidCharacter: 'The character \'{0}\' is invalid for the current barcode type. The valid ones are: {1}',
                invalidDimension: 'The barcode dimension cannot be determined because of an incorrect combination of Stretch, BarsFillMode and XDimension property values.',
                invalidHeight: 'This number of barcode grid rows ({0}) cannot fit in such a height ({1} pixel(s)).',
                invalidLength: 'The barcode Data property value should have {0} digit(s).',
                invalidPostalCode: 'Invalid PostalCode value - Mode 2 encodes up to 9 digits postal code (U.S. zip code) while Mode 3 encodes up to 6 characters alpha-numeric code.',
                invalidPropertyValue: 'The {0} property value should be in the range of {1}-{2}.',
                invalidVersion: 'The SizeVersion propery value number does not generate enough cells to encode the data with the current encoding mode and error correction level.',
                invalidWidth: 'This number of barcode grid columns ({0}) cannot fit in such a width ({1} pixel(s)). Check the XDimension or/and the WidthToHeightRatio property values.',
                invalidXDimensionValue: 'The XDimension property value should be in the range of {0} to {1} for the current barcode type.',
                maxLength: 'The length {0} of the text exceeds the maximum encodable for the current type of barcode. It could encode max {1} characters.',
                notSupportedEncoding: 'The encoding corresponding under the {0} {1} is not supported.',
                pDF417InvalidRowsColumnsCombination: 'The codewords (data & error correction) are more than can be encoded in symbol with a matrix {0}x{1}.',
                primaryMessageError: 'Cannot extract the primary message from the Data property value. Refer to the documentation for its structure.',
                serviceClassError: 'Error converting service class. It should be a numeric value.',
                smallSize: 'Cannot fit the grid in Size({0}, {1}) with the defined Stretch settings.',
                unencodableCharacter: 'The character \'{0}\' cannot be encoded.',
                uPCEFirstDigit: 'The first UPCE digit shall always be zero by specification.',
                warningString: 'Barcode warning: ',
                wrongCompactionMode: 'The Data property value cannot be compacted with {0} mode.',
                notLoadedEncoding: 'The {0} encoding is not loaded.'
            }
        };
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Combo) {
        $.ig.Combo = {
            locale: {
                noMatchFoundText: 'No Results',
                dropDownButtonTitle: 'Show drop-down',
                clearButtonTitle: 'Clear value'
            }
        };
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Dialog) {
        $.ig.Dialog = {
            locale: {
                closeButtonTitle: 'Close',
                minimizeButtonTitle: 'Minimize',
                maximizeButtonTitle: 'Maximize',
                pinButtonTitle: 'Pin',
                unpinButtonTitle: 'Unpin',
                restoreButtonTitle: 'Restore'
            }
        };
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.igDoughnutChart) {
        $.ig.igDoughnutChart = {};
        $.extend($.ig.igDoughnutChart, { locale: { invalidBaseElement: ' is not supported as base element. Use DIV instead.' } });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Editor) {
        $.ig.Editor = {
            locale: {
                spinUpperTitle: 'Increment',
                spinLowerTitle: 'Decrement',
                buttonTitle: 'Show list',
                clearTitle: 'Clear value',
                datePickerButtonTitle: 'Show calendar',
                updateModeUnsupportedValue: 'The updateMode option supports two possible values - "onChange" and "immediate"'
            }
        };
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Grid) {
        $.ig.Grid = {};
        $.extend($.ig.Grid, {
            locale: {
                noSuchWidget: 'No such widget loaded: ',
                autoGenerateColumnsNoRecords: 'autoGenerateColumns is enabled, but there are no records in the data source in order to determine the columns',
                optionChangeNotSupported: 'Changing the following option after the igGrid has been created is not supported:',
                optionChangeNotScrollingGrid: 'The following option cannot be changed after the grid is created because your initial grid is not scrolling and full re-rendering is required:',
                noPrimaryKeyDefined: 'There is no primary key defined for the grid. In order to use features such as Grid Editing, you will need to define a primary key.',
                indexOutOfRange: 'The row index you have specified is out of range.',
                noSuchColumnDefined: 'The specified column key does not match any of the defined grid columns.',
                columnIndexOutOfRange: 'The specified column index is out of range.',
                recordNotFound: 'The record with the specified id could not be found in the data view:',
                columnNotFound: 'No column was found matching key:',
                colPrefix: 'Column ',
                columnVirtualizationRequiresWidth: 'You have virtualization / columnVirtualization set to true, but no width could be inferred for grid columns. You should set one of a) grid width, b) defaultColumnWidth, c) define width for each column',
                virtualizationRequiresHeight: 'You have virtualization set to true which requires grid height to be set too.',
                colVirtualizationDenied: 'columnVirtualization is applicable for fixed virtualization only',
                noColumnsButAutoGenerateTrue: 'You have autoGenerateColumns set to false, but there are no columns defined in the grid. Please set autoGenerateColumns to true, or specify columns manually',
                noPrimaryKey: 'the igHierarchicalGrid widget requires a primary key to be defined.',
                templatingEnabledButNoTemplate: 'You have jQueryTemplating set to true, but there is no rowTemplate defined.',
                expandTooltip: 'Expand Row',
                collapseTooltip: 'Collapse Row',
                movingNotAllowedOrIncompatible: 'Moving of the requested column could not be completed. The column was not found or the result was not compatible with the column layout.'
            }
        });
        $.ig.GridFiltering = $.ig.GridFiltering || {};
        $.extend($.ig.GridFiltering, {
            locale: {
                startsWithNullText: 'Starts with...',
                endsWithNullText: 'Ends with...',
                containsNullText: 'Contains...',
                doesNotContainNullText: 'Does not contain...',
                equalsNullText: 'Equals...',
                doesNotEqualNullText: 'Does not equal...',
                greaterThanNullText: 'Greater than...',
                lessThanNullText: 'Less than...',
                greaterThanOrEqualToNullText: 'Greater than or equal to...',
                lessThanOrEqualToNullText: 'Less than or equal to...',
                onNullText: 'On...',
                notOnNullText: 'Not on...',
                afterNullText: 'After',
                beforeNullText: 'Before',
                emptyNullText: 'Empty',
                notEmptyNullText: 'Not empty',
                nullNullText: 'Null',
                notNullNullText: 'Not null',
                startsWithLabel: 'Starts with',
                endsWithLabel: 'Ends with',
                containsLabel: 'Contains',
                doesNotContainLabel: 'Does not contain',
                equalsLabel: 'Equals',
                doesNotEqualLabel: 'Does not equal',
                greaterThanLabel: 'Greater than',
                lessThanLabel: 'Less than',
                greaterThanOrEqualToLabel: 'Greater than or equal to',
                lessThanOrEqualToLabel: 'Less than or equal to',
                trueLabel: 'True',
                falseLabel: 'False',
                afterLabel: 'After',
                beforeLabel: 'Before',
                todayLabel: 'Today',
                yesterdayLabel: 'Yesterday',
                thisMonthLabel: 'This month',
                lastMonthLabel: 'Last month',
                nextMonthLabel: 'Next month',
                thisYearLabel: 'This year',
                lastYearLabel: 'Last year',
                nextYearLabel: 'Next year',
                clearLabel: 'Clear Filter',
                noFilterLabel: 'No',
                onLabel: 'On',
                notOnLabel: 'Not on',
                advancedButtonLabel: 'Advanced',
                filterDialogCaptionLabel: 'ADVANCED SEARCH',
                filterDialogConditionLabel1: 'Show records matching ',
                filterDialogConditionLabel2: ' of the following criteria',
                filterDialogOkLabel: 'Search',
                filterDialogCancelLabel: 'Cancel',
                filterDialogAnyLabel: 'ANY',
                filterDialogAllLabel: 'ALL',
                filterDialogAddLabel: 'Add',
                filterDialogErrorLabel: 'Maximum filters count exceeded.',
                filterSummaryTitleLabel: 'Search results',
                filterSummaryTemplate: '${matches} matching records',
                filterDialogClearAllLabel: 'Clear ALL',
                tooltipTemplate: '${condition} filter applied',
                featureChooserText: 'Hide Filter',
                featureChooserTextHide: 'Show Filter',
                featureChooserTextAdvancedFilter: 'Advanced Filter',
                virtualizationSimpleFilteringNotAllowed: 'When horizontal virtualization is enabled, simple filtering (filter row) is not supported. Please set mode to \'advanced\' and/or do not enable advancedModeEditorsVisible',
                featureChooserNotReferenced: 'Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use loader or use one of the combined script files.'
            }
        });
        $.ig.GridGroupBy = $.ig.GridGroupBy || {};
        $.extend($.ig.GridGroupBy, {
            locale: {
                emptyGroupByAreaContent: 'Drag a column here or {0} to Group By',
                emptyGroupByAreaContentSelectColumns: 'select columns',
                emptyGroupByAreaContentSelectColumnsCaption: 'select columns',
                expandTooltip: 'Expand Grouped Row',
                collapseTooltip: 'Collapse Grouped Row',
                removeButtonTooltip: 'Remove Grouped Column',
                featureChooserText: 'Ungroup By',
                featureChooserTextHide: 'Group By',
                modalDialogCaptionButtonDesc: 'Click to sort ascending',
                modalDialogCaptionButtonAsc: 'Click to sort descending',
                modalDialogCaptionButtonUngroup: 'Click to ungroup',
                modalDialogGroupByButtonText: 'Group By',
                modalDialogCaptionText: 'Add to Group By',
                modalDialogDropDownLabel: 'Showing:',
                modalDialogClearAllButtonLabel: 'clear all',
                modalDialogRootLevelHierarchicalGrid: 'root',
                modalDialogDropDownButtonCaption: 'Click to show/hide',
                modalDialogButtonApplyText: 'Apply',
                modalDialogButtonCancelText: 'Cancel'
            }
        });
        $.ig.GridHiding = $.ig.GridHiding || {};
        $.extend($.ig.GridHiding, {
            locale: {
                columnChooserDisplayText: 'Column Chooser',
                hiddenColumnIndicatorTooltipText: 'Hidden Column(s)',
                columnHideText: 'Hide',
                columnChooserCaptionLabel: 'Column Chooser',
                columnChooserCheckboxesHeader: 'view',
                columnChooserColumnsHeader: 'column',
                columnChooserCloseButtonTooltip: 'Close',
                hideColumnIconTooltip: 'Hide',
                featureChooserNotReferenced: 'Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.',
                columnChooserShowText: 'Show',
                columnChooserHideText: 'Hide',
                columnChooserResetButtonLabel: 'reset',
                columnChooserButtonApplyText: 'Apply',
                columnChooserButtonCancelText: 'Cancel'
            }
        });
        $.ig.GridPaging = $.ig.GridPaging || {};
        $.extend($.ig.GridPaging, {
            locale: {
                pageSizeDropDownLabel: 'Show ',
                pageSizeDropDownTrailingLabel: 'records',
                nextPageLabelText: 'next',
                prevPageLabelText: 'prev',
                firstPageLabelText: '',
                lastPageLabelText: '',
                currentPageDropDownLeadingLabel: 'Pg',
                currentPageDropDownTrailingLabel: 'of ${count}',
                currentPageDropDownTooltip: 'Choose page index',
                pageSizeDropDownTooltip: 'Choose number of records per page',
                pagerRecordsLabelTooltip: 'Current records range',
                prevPageTooltip: 'go to the previous page',
                nextPageTooltip: 'go to the next page',
                firstPageTooltip: 'go to the first page',
                lastPageTooltip: 'go to the last page',
                pageTooltipFormat: 'page ${index}',
                pagerRecordsLabelTemplate: '${startRecord} - ${endRecord} of ${recordCount} records'
            }
        });
        $.ig.GridRowSelectors = $.ig.GridRowSelectors || {};
        $.extend($.ig.GridRowSelectors, { locale: { selectionNotLoaded: 'igGridSelection is not initialized. To avoid receiving this error message please enable the Selection feature for the grid or set the requireSelection property of the Row Selectors feature to false.' } });
        $.ig.GridSorting = $.ig.GridSorting || {};
        $.extend($.ig.GridSorting, {
            locale: {
                sortedColumnTooltipFormat: 'sorted ${direction}',
                unsortedColumnTooltip: 'click to sort column',
                ascending: 'ascending',
                descending: 'descending',
                modalDialogSortByButtonText: 'sort by',
                modalDialogResetButton: 'reset',
                modalDialogCaptionButtonDesc: 'Click to sort descending',
                modalDialogCaptionButtonAsc: 'Click to sort ascending',
                modalDialogCaptionButtonUnsort: 'Click to remove sorting',
                featureChooserText: 'Sort on Multiple',
                modalDialogCaptionText: 'Sort Multiple',
                modalDialogButtonApplyText: 'Apply',
                modalDialogButtonCancelText: 'Cancel',
                sortingHiddenColumnNotSupport: 'Sorting hidden column is not supported',
                featureChooserSortAsc: 'Sort A to Z',
                featureChooserSortDesc: 'Sort Z to A'
            }
        });
        $.ig.GridSummaries = $.ig.GridSummaries || {};
        $.extend($.ig.GridSummaries, {
            locale: {
                featureChooserText: 'Hide Summaries',
                featureChooserTextHide: 'Show Summaries',
                dialogButtonOKText: 'OK',
                dialogButtonCancelText: 'Cancel',
                emptyCellText: '',
                summariesHeaderButtonTooltip: 'Show/hide summaries',
                defaultSummaryRowDisplayLabelCount: 'Count',
                defaultSummaryRowDisplayLabelMin: 'Min',
                defaultSummaryRowDisplayLabelMax: 'Max',
                defaultSummaryRowDisplayLabelSum: 'Sum',
                defaultSummaryRowDisplayLabelAvg: 'Avg',
                defaultSummaryRowDisplayLabelCustom: 'Custom',
                calculateSummaryColumnKeyNotSpecified: 'Please specify column key to calculate summary',
                featureChooserNotReferenced: 'Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.'
            }
        });
        $.ig.GridUpdating = $.ig.GridUpdating || {};
        $.extend($.ig.GridUpdating, {
            locale: {
                doneLabel: 'Done',
                doneTooltip: 'Stop editing and update',
                cancelLabel: 'Cancel',
                cancelTooltip: 'Stop editing and do not update',
                addRowLabel: 'Add new row',
                addRowTooltip: 'Click to start adding new row',
                deleteRowLabel: '',
                deleteRowTooltip: 'Delete row',
                igEditorException: 'The updating for ui.igGrid requires ui.igEditor to be loaded',
                igComboException: 'In order to use the combo type for ui.igGrid, the ui.igCombo should be loaded',
                igRatingException: 'In order to use the igRating as editor for ui.igGrid, the ui.igRating should be loaded',
                igValidatorException: 'Validation options defined in igGridUpdating require ui.igValidator to be loaded',
                noPrimaryKeyException: 'In order to support update operations after a row was deleted, application should define "primaryKey" in options of igGrid.',
                hiddenColumnValidationException: 'Cannot edit row which has a hidden column with enabled validation.',
                dataDirtyException: 'Grid has pending transactions which may affect rendering of data. To prevent exception, application may enable "autoCommit" option of igGrid, or it should process "dataDirty" event of igGridUpdating and return false. While processing that event, application also may do "commit()" data in igGrid.',
                rowEditDialogCaptionLabel: 'Edit row data'
            }
        });
        $.ig.ColumnMoving = $.ig.ColumnMoving || {};
        $.extend($.ig.ColumnMoving, {
            locale: {
                movingDialogButtonApplyText: 'Apply',
                movingDialogButtonCancelText: 'Cancel',
                movingDialogCaptionButtonDesc: 'Move Down',
                movingDialogCaptionButtonAsc: 'Move Up',
                movingDialogCaptionText: 'Move Columns',
                movingDialogDisplayText: 'Move Columns',
                dropDownMoveLeftText: 'Move Left',
                dropDownMoveRightText: 'Move Right',
                dropDownMoveFirstText: 'Move First',
                dropDownMoveLastText: 'Move Last',
                featureChooserNotReferenced: 'Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.',
                movingToolTipMove: 'Move',
                featureChooserSubmenuText: 'Move To'
            }
        });
        $.ig.ColumnFixing = $.ig.ColumnFixing || {};
        $.extend($.ig.ColumnFixing, {
            locale: {
                headerFixButtonText: 'Click to fix this column',
                headerUnfixButtonText: 'Click to unfix this column',
                featureChooserTextFixedColumn: 'Fix column',
                featureChooserTextUnfixedColumn: 'Unfix column',
                groupByNotSupported: 'igGridGroupBy is not supported with ColumnFixing',
                virtualizationNotSupported: 'Virtualization is not supported with ColumnFixing',
                columnMovingNotSupported: 'igGridColumnMoving is not supported with ColumnFixing',
                hidingNotSupported: 'igGridHiding is not supported with ColumnFixing',
                hierarchicalGridNotSupported: 'igHierarchicalGrid is not supported with ColumnFixing',
                responsiveNotSupported: 'igGridResponsive is not supported with ColumnFixing',
                noGridWidthHeightNotSupported: 'When grid hasn\'t width and height Column Fixing is not supported'
            }
        });
        $.ig.GridLoadOnDemand = $.ig.GridLoadOnDemand || {};
        $.extend($.ig.GridLoadOnDemand, {
            locale: {
                loadMoreDataButtonText: 'Load more data',
                loadOnDemandRequiresHeight: 'Load On Demand feature requires height',
                groupByNotSupported: 'igGridGroupBy is not supported with LoadOnDemand',
                pagingNotSupported: 'igGridPaging is not supported with LoadOnDemand',
                cellMergingNotSupported: 'igGridCellMerging is not supported with LoadOnDemand',
                virtualizationNotSupported: 'virtualization is not supported with LoadOnDemand'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.HtmlEditor) {
        $.ig.HtmlEditor = {};
        $.extend($.ig.HtmlEditor, {
            locale: {
                boldButtonTitle: 'Bold',
                italicButtonTitle: 'Italic',
                underlineButtonTitle: 'Underline',
                strikethroughButtonTitle: 'Strikethrough',
                increaseFontSizeButtonTitle: 'Increase Font Size',
                decreaseFontSizeButtonTitle: 'Decrease Font Size',
                alignTextLeftButtonTitle: 'Align Text Left',
                alignTextRightButtonTitle: 'Align Text Right',
                alignTextCenterButtonTitle: 'Center',
                justifyButtonTitle: 'Justify',
                bulletsButtonTitle: 'Bullets',
                numberingButtonTitle: 'Numbering',
                decreaseIndentButtonTitle: 'Decrease Indent',
                increaseIndentButtonTitle: 'Increase Indent',
                insertPictureButtonTitle: 'Insert Picture',
                fontColorButtonTitle: 'Font Color',
                textHighlightButtonTitle: 'Text Highlight Color',
                insertLinkButtonTitle: 'Insert Hyperlink',
                insertTableButtonTitle: 'Table',
                addRowButtonTitle: 'Add Row',
                removeRowButtonTitle: 'Remove Row',
                addColumnButtonTitle: 'Add Column',
                removeColumnButtonTitle: 'Remove Column',
                inserHRButtonTitle: 'Insert Horizontal Rule',
                viewSourceButtonTitle: 'View Source',
                cutButtonTitle: 'Cut',
                copyButtonTitle: 'Copy',
                pasteButtonTitle: 'Paste',
                undoButtonTitle: 'Undo',
                redoButtonTitle: 'Redo',
                imageUrlDialogText: 'Image URL:',
                imageAlternativeTextDialogText: 'Alternative Text:',
                imageWidthDialogText: 'Image Width:',
                imageHeihgtDialogText: 'Image Height:',
                linkNavigateToUrlDialogText: 'Navigate to URL:',
                linkDisplayTextDialogText: 'Display Text:',
                linkOpenInDialogText: 'Open In:',
                linkTargetNewWindowDialogText: 'New Window',
                linkTargetSameWindowDialogText: 'Same Window',
                linkTargetParentWindowDialogText: 'Parent Window',
                linkTargetTopmostWindowDialogText: 'Topmost Window',
                applyButtonTitle: 'Apply',
                cancelButtonTitle: 'Cancel',
                collapseButtonTitle: 'Collapse',
                expandButtonTitle: 'Expand',
                defaultToolbars: {
                    textToolbar: 'text manipulation toolbar',
                    formattingToolbar: 'text formatting toolbar',
                    insertObjectToolbar: 'objects insertion toolbar',
                    copyPasteToolbar: 'copy/paste toolbar'
                },
                fontNames: {
                    win: [
                        {
                            text: 'Times New Roman',
                            value: 'Times New Roman'
                        },
                        {
                            text: 'Arial',
                            value: 'Arial'
                        },
                        {
                            text: 'Arial Black',
                            value: 'Arial Black'
                        },
                        {
                            text: 'Helvetica',
                            value: 'Helvetica'
                        },
                        {
                            text: 'Comic Sans MS',
                            value: 'Comic Sans MS'
                        },
                        {
                            text: 'Courier New',
                            value: 'Courier New'
                        },
                        {
                            text: 'Georgia',
                            value: 'Georgia'
                        },
                        {
                            text: 'Impact',
                            value: 'Impact'
                        },
                        {
                            text: 'Lucida Console',
                            value: 'Lucida Console'
                        },
                        {
                            text: 'Lucida Sans Unicode',
                            value: 'Lucida Sans Unicode'
                        },
                        {
                            text: 'Palatino Linotype',
                            value: 'Palatino Linotype'
                        },
                        {
                            text: 'Tahoma',
                            value: 'Tahoma'
                        },
                        {
                            text: 'Trebuchet MS',
                            value: 'Trebuchet MS'
                        },
                        {
                            text: 'Verdana',
                            value: 'Verdana'
                        },
                        {
                            text: 'Symbol',
                            value: 'Symbol'
                        },
                        {
                            text: 'Webdings',
                            value: 'Webdings'
                        },
                        {
                            text: 'Wingdings',
                            value: 'Wingdings'
                        },
                        {
                            text: 'MS Sans Serif',
                            value: 'MS Sans Serif'
                        },
                        {
                            text: 'MS Serif',
                            value: 'MS Serif'
                        }
                    ],
                    mac: [
                        {
                            text: 'Times New Roman',
                            value: 'Times New Roman'
                        },
                        {
                            text: 'Arial',
                            value: 'Arial'
                        },
                        {
                            text: 'Arial Black',
                            value: 'Arial Black'
                        },
                        {
                            text: 'Helvetica',
                            value: 'Helvetica'
                        },
                        {
                            text: 'Comic Sans MS',
                            value: 'Comic Sans MS'
                        },
                        {
                            text: 'Courier New',
                            value: 'Courier New'
                        },
                        {
                            text: 'Georgia',
                            value: 'Georgia'
                        },
                        {
                            text: 'Impact',
                            value: 'Impact'
                        },
                        {
                            text: 'Monaco',
                            value: 'Monaco'
                        },
                        {
                            text: 'Lucida Grande',
                            value: 'Lucida Grande'
                        },
                        {
                            text: 'Book Antiqua',
                            value: 'Book Antiqua'
                        },
                        {
                            text: 'Geneva',
                            value: 'Geneva'
                        },
                        {
                            text: 'Trebuchet MS',
                            value: 'Trebuchet'
                        },
                        {
                            text: 'Verdana',
                            value: 'Verdana'
                        },
                        {
                            text: 'Symbol',
                            value: 'Symbol'
                        },
                        {
                            text: 'Webdings',
                            value: 'Webdings'
                        },
                        {
                            text: 'Zapf Dingbats',
                            value: 'Zapf Dingbats'
                        },
                        {
                            text: 'New York',
                            value: 'New York'
                        }
                    ]
                },
                fontSizes: [
                    {
                        text: '1',
                        value: '1 (8pt)',
                        style: 'xx-small'
                    },
                    {
                        text: '2',
                        value: '2 (9pt)',
                        style: 'x-small'
                    },
                    {
                        text: '3',
                        value: '3 (10pt)',
                        style: 'small'
                    },
                    {
                        text: '4',
                        value: '4 (12pt)',
                        style: 'medium'
                    },
                    {
                        text: '5',
                        value: '5 (14pt)',
                        style: 'large'
                    },
                    {
                        text: '6',
                        value: '6 (16pt)',
                        style: 'x-large'
                    },
                    {
                        text: '7',
                        value: '7 (18pt)',
                        style: 'xx-large'
                    }
                ],
                formatsList: [
                    {
                        text: 'h1',
                        value: 'Heading 1'
                    },
                    {
                        text: 'h2',
                        value: 'Heading 2'
                    },
                    {
                        text: 'h3',
                        value: 'Heading 3'
                    },
                    {
                        text: 'h4',
                        value: 'Heading 4'
                    },
                    {
                        text: 'h5',
                        value: 'Heading 5'
                    },
                    {
                        text: 'h6',
                        value: 'Heading 6'
                    }
                ]
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.PivotShared) {
        $.ig.PivotShared = {};
        $.extend($.ig.PivotShared, {
            locale: {
                invalidDataSource: 'The passed data source either null or not supported.',
                measureList: 'Measures',
                ok: 'OK',
                cancel: 'Cancel',
                addToMeasures: 'Add to Measures',
                addToFilters: 'Add to Filters',
                addToColumns: 'Add to Columns',
                addToRows: 'Add to Rows'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.PivotDataSelector) {
        $.ig.PivotDataSelector = {};
        $.extend($.ig.PivotDataSelector, {
            locale: {
                invalidBaseElement: ' is not supported as base element. Use DIV instead.',
                catalog: 'Catalog',
                cube: 'Cube',
                measureGroup: 'Measure Group',
                measureGroupAll: '(All)',
                rows: 'Rows',
                columns: 'Columns',
                measures: 'Measures',
                filters: 'Filters',
                deferUpdate: 'Defer Update',
                updateLayout: 'Update Layout',
                selectAll: 'Select All'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.PivotGrid) {
        $.ig.PivotGrid = {};
        $.extend($.ig.PivotGrid, {
            locale: {
                filtersHeader: 'Drop Filter Fields Here',
                measuresHeader: 'Drop Data Items Here',
                rowsHeader: 'Drop Row Fields Here',
                columnsHeader: 'Drop Column Fields Here',
                disabledFiltersHeader: 'Filter Fields',
                disabledMeasuresHeader: 'Data Items',
                disabledRowsHeader: 'Row Fields',
                disabledColumnsHeader: 'Column Fields',
                noSuchAxis: 'No such axis'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Popover) {
        $.ig.Popover = {};
        $.extend($.ig.Popover, {
            locale: {
                popoverOptionChangeNotSupported: 'Changing the following option after igPopover has been initialized is not supported:',
                popoverShowMethodWithoutTarget: 'The target parameter of the show function is mandatory when the selectors option is used'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Splitter) {
        $.ig.Splitter = {};
        $.extend($.ig.Splitter, { locale: { errorPanels: 'The number of panels have to be no more than two.' } });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.TileManager) {
        $.ig.TileManager = {};
        $.extend($.ig.TileManager, {
            locale: {
                renderDataError: 'Data was not successfully retrieved or parsed.',
                setOptionItemsLengthError: 'The length of the items configurations does not match the number of the tiles.'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Tree) {
        $.ig.Tree = {};
        $.extend($.ig.Tree, {
            locale: {
                invalidArgumentType: 'Invalid argument type provided.',
                errorOnRequest: 'An error has occurred while retrieving data: ',
                noDataSourceUrl: 'The igTree control requires a dataSourceUrl provided in order to initiate a request for data to that URL.',
                incorrectPath: 'A node was not found at the provided path: ',
                incorrectNodeObject: 'The provided argument is not a jQuery node element.',
                setOptionError: 'Runtime changes are not allowed for the following option: ',
                moveTo: '<strong>Move to</strong> {0}',
                moveBetween: '<strong>Move between</strong> {0} and {1}',
                moveAfter: '<strong>Move after</strong> {0}',
                moveBefore: '<strong>Move before</strong> {0}',
                copyTo: '<strong>Copy to</strong> {0}',
                copyBetween: '<strong>Copy between</strong> {0} and {1}',
                copyAfter: '<strong>Copy after</strong> {0}',
                copyBefore: '<strong>Copy before</strong> {0}',
                and: 'and'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Upload) {
        $.ig.Upload = {};
        $.extend($.ig.Upload, {
            locale: {
                labelUploadButton: 'Upload File',
                labelAddButton: 'Add',
                labelClearAllButton: 'Clear Uploaded',
                labelSummaryTemplate: '{0} of {1} uploaded',
                labelSummaryProgressBarTemplate: '{0}/{1}',
                labelShowDetails: 'Show Details',
                labelHideDetails: 'Hide Details',
                labelSummaryProgressButtonCancel: 'Cancel',
                labelSummaryProgressButtonContinue: 'Upload',
                labelSummaryProgressButtonDone: 'Done',
                labelProgressBarFileNameContinue: '...',
                errorMessageFileSizeExceeded: 'Max file size exceeded.',
                errorMessageGetFileStatus: 'Could not get your current file status! Probably connection dropped.',
                errorMessageCancelUpload: 'Could not send to server command to cancel upload! Probably connection dropped.',
                errorMessageNoSuchFile: 'The file you requested could not be found. Probably this file is too big.',
                errorMessageOther: 'There is internal error uploading file. Error code: {0}.',
                errorMessageValidatingFileExtension: 'File extension validation failed.',
                errorMessageAJAXRequestFileSize: 'AJAX error while trying to get file size.',
                errorMessageMaxUploadedFiles: 'Maximum count of uploading files exceeded.',
                errorMessageMaxSimultaneousFiles: 'Value of maxSimultaneousFilesUploads is incorrect. It should be more than 0 or null.',
                errorMessageTryToRemoveNonExistingFile: 'You are trying to remove non-existing file with id {0}.',
                errorMessageTryToStartNonExistingFile: 'You are trying to start non-existing file with id {0}.',
                titleUploadFileButtonInit: 'Upload File',
                titleAddFileButton: 'Add',
                titleCancelUploadButton: 'Cancel',
                titleSummaryProgressButtonContinue: 'Upload',
                titleClearUploaded: 'Clear Uploaded',
                titleShowDetailsButton: 'Show Details',
                titleHideDetailsButton: 'Hide Details',
                titleSummaryProgressButtonCancel: 'Cancel',
                titleSummaryProgressButtonDone: 'Done',
                titleSingleUploadButtonContinue: 'Upload',
                titleClearAllButton: 'Clear Uploaded'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Validator) {
        $.ig.Validator = {
            locale: {
                defaultMessage: 'Please fix this field',
                selectMessage: 'Please select a value',
                rangeSelectMessage: 'Please select no more than {0} and not less than {1} items',
                minSelectMessage: 'Please select at least {0} items',
                maxSelectMessage: 'Please select no more than {0} items',
                rangeLengthMessage: 'Please enter a value between {0} and {1} characters long',
                minLengthMessage: 'Please enter at least {0} characters',
                maxLengthMessage: 'Please enter no more than {0} characters',
                requiredMessage: 'This field is required',
                maskMessage: 'Please fill all required positions',
                dateFieldsMessage: 'Please enter values in date fields',
                invalidDayMessage: 'Invalid day of month. Please enter correct day',
                dateMessage: 'Please enter a valid date',
                numberMessage: 'Please enter a valid number',
                rangeMessage: 'Please enter a value between {0} and {1}',
                minMessage: 'Please enter a value greater than or equal to {0}',
                maxMessage: 'Please enter a value less than or equal to {0}'
            }
        };
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.VideoPlayer) {
        $.ig.VideoPlayer = {};
        $.extend($.ig.VideoPlayer, {
            locale: {
                liveStream: 'Live video',
                live: 'Live',
                paused: 'Paused',
                playing: 'Playing',
                play: 'Play',
                volume: 'Volume',
                unsupportedVideoSource: 'The current video sources does not contain a format that is supported by your browser.',
                missingVideoSource: 'No compatible video source.',
                progressLabelLongFormat: '$currentTime$ / $duration$',
                progressLabelShortFormat: '$currentTime$',
                enterFullscreen: 'Go Fullscreen',
                exitFullscreen: 'Exit Fullscreen',
                skipTo: 'SKIP TO',
                unsupportedBrowser: 'The current browser does not support HTML5 video. <br/>Try upgrading to any of the following versions:',
                currentBrowser: 'Current browser: {0}',
                ie9: 'Microsoft Internet Explorer V 9+',
                chrome8: 'Google Chrome V 8+',
                firefox36: 'Mozilla Firefox V 3.6+',
                safari5: 'Apple Safari V 5+',
                opera11: 'Opera V 11+',
                ieDownload: 'http://www.microsoft.com/windows/internet-explorer/default.aspx',
                operaDownload: 'http://www.opera.com/download/',
                chromeDownload: 'http://www.google.com/chrome',
                firefoxDownload: 'http://www.mozilla.com/',
                safariDownload: 'http://www.apple.com/safari/download/',
                buffering: 'Buffering...',
                adMessage: 'Ad: Video will resume in $duration$ seconds.',
                adMessageLong: 'Ad: Video will resume in $duration$.',
                adMessageNoDuration: 'Ad: Video will resume after the commercial.',
                adNewWindowTip: 'Ad: Click to open ad content in a new window.',
                nonDivException: 'The Infragistics HTML5 Video Player can be instantiated only on a DIV tag.',
                relatedVideos: 'RELATED VIDEOS',
                replayButton: 'Replay',
                replayTooltip: 'Click to replay last video.'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.Zoombar) {
        $.ig.Zoombar = {};
        $.extend($.ig.Zoombar, {
            locale: {
                zoombarTargetNotSpecified: 'igZoombar requires a valid target to attach to!',
                zoombarTypeNotSupported: 'The type of widget the Zoombar is trying to attach to is not supported!',
                optionChangeNotSupported: 'Changing the following option after the igZoombar has been created is not supported:'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    if (!$.ig.util) {
        $.ig.util = {};
        $.extend($.ig.util, {
            locale: {
                unsupportedBrowser: 'The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:',
                currentBrowser: 'Current browser: {0}',
                ie9: 'Microsoft Internet Explorer V 9+',
                chrome8: 'Google Chrome V 8+',
                firefox36: 'Mozilla Firefox V 3.6+',
                safari5: 'Apple Safari V 5+',
                opera11: 'Opera V 11+',
                ieDownload: 'http://www.microsoft.com/windows/internet-explorer/default.aspx',
                operaDownload: 'http://www.opera.com/download/',
                chromeDownload: 'http://www.google.com/chrome',
                firefoxDownload: 'http://www.mozilla.com/',
                safariDownload: 'http://www.apple.com/safari/download/'
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function () {
    var __start = new Date().getTime();
    var initializing = false, fnTest = /xyz/.test(function () {
            var __start = new Date().getTime();
            xyz();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
        }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    Class.extend = function (prop, doAugment) {
        var __start = new Date().getTime();
        var doSuper = true, _super = this.prototype, prototype, name;
        if (doAugment) {
            doSuper = false;
        }
        initializing = true;
        prototype = new this();
        initializing = false;
        function makeFn(name, fn) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('makeFn', __ms);
            }
            return function () {
                var __start = new Date().getTime();
                var tmp = this._super, ret;
                this._super = _super[name];
                ret = fn.apply(this, arguments);
                this._super = tmp;
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
                return ret;
            };
        }
        for (name in prop) {
            if (prop.hasOwnProperty(name)) {
                prototype[name] = doSuper && typeof prop[name] === 'function' && typeof _super[name] === 'function' && fnTest.test(prop[name]) ? makeFn(name, prop[name]) : prop[name];
            }
        }
        function Class() {
            var __start = new Date().getTime();
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('Class', __ms);
            }
        }
        Class.prototype = prototype;
        Class.constructor = Class;
        Class.extend = arguments.callee;
        if (doAugment) {
            Class.typeName = function () {
                var __start = new Date().getTime();
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('Class.typeName', __ms);
                }
                return this.prototype.$type;
            };
            Class.baseType = function () {
                var __start = new Date().getTime();
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('Class.baseType', __ms);
                }
                return this.$type.baseType;
            };
            Class.prototype.getType = function () {
                var __start = new Date().getTime();
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return this.$type;
            };
            Class.prototype.getHashCode = function () {
                var __start = new Date().getTime();
                if (this.$hashCode !== undefined) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('', __ms);
                    }
                    return this.$hashCode;
                }
                this.$hashCode = $.ig.nextHashCode++;
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return this.$hashCode;
            };
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('Class.extend', __ms);
        }
        return Class;
    };
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        define('ig.util', [], function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return Class;
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}());
(function ($) {
    var __start = new Date().getTime();
    $.fn.startsWith = function (str) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this[0].innerHTML.indexOf(str) === 0;
    };
    $.ig = $.ig || {};
    $.ig.util = $.ig.util || {};
    $.ig.util.browserVersion = '';
    $.ig.util.isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || !!window.navigator.userAgent.match(/trident/i);
    $.ig.util.isIEOld = $.ig.util.isIE && !window.HTMLElement ? true : false;
    if ($.ig.util.isIE) {
        if (navigator.appName === 'Microsoft Internet Explorer') {
            var re = new RegExp('MSIE ([0-9]{1,})');
            if (re.exec(navigator.userAgent)) {
                $.ig.util.browserVersion = parseInt(RegExp.$1);
            }
        } else if (navigator.appName === 'Netscape') {
            var re = new RegExp('rv:([0-9]{1,})');
            if (re.exec(navigator.userAgent)) {
                $.ig.util.browserVersion = parseInt(RegExp.$1);
            }
        }
        $.ig.util.isIE7 = $.ig.util.browserVersion <= 7;
        $.ig.util.isIE8 = $.ig.util.browserVersion === 8;
        $.ig.util.isIE9 = $.ig.util.browserVersion === 9;
        $.ig.util.isIE10 = $.ig.util.browserVersion === 10;
        $.ig.util.isIE11 = $.ig.util.browserVersion >= 11;
    }
    $.ig.util.isChrome = window.chrome;
    $.ig.util.isFF = window.mozInnerScreenX !== undefined;
    $.ig.util.isOpera = !!window.opera;
    $.ig.util.isSafari = !!(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0);
    $.ig.util.isWebKit = !!window.webkitURL;
    $.ajaxQueue = function (queueName, options) {
        var __start = new Date().getTime();
        var callback;
        if (typeof document.ajaxQueue === 'undefined') {
            document.ajaxQueue = { queue: {} };
        }
        if (typeof document.ajaxQueue.queue[queueName] === 'undefined') {
            document.ajaxQueue.queue[queueName] = [];
        }
        if (typeof options === 'undefined') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('$.ajaxQueue', __ms);
            }
            return;
        }
        callback = options.complete;
        options.complete = function (request, status) {
            var __start = new Date().getTime();
            document.ajaxQueue.queue[queueName].shift();
            if (typeof callback !== 'undefined') {
                callback(request, status);
            }
            if (document.ajaxQueue.queue[queueName].length > 0) {
                $.ajax(document.ajaxQueue.queue[queueName][0]);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('options.complete', __ms);
            }
        };
        document.ajaxQueue.queue[queueName].push(options);
        if (document.ajaxQueue.queue[queueName].length === 1) {
            $.ajax(document.ajaxQueue.queue[queueName][0]);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('$.ajaxQueue', __ms);
        }
    };
    if (typeof $.ig.useDefineProperty === 'undefined') {
        $.ig.useDefineProperty = true;
    }
    $.ig.extendNativePrototype = function (proto, propName, val) {
        var __start = new Date().getTime();
        if ($.ig.useDefineProperty) {
            try {
                Object.defineProperty(proto, propName, {
                    value: val,
                    enumerable: false,
                    configurable: true,
                    writable: true
                });
            } catch (e) {
                proto[propName] = val;
            }
        } else {
            proto[propName] = val;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    Date.prototype.stdTimezoneOffset = function () {
        var __start = new Date().getTime();
        var jan, jul, janOffset, julOffset;
        jan = new Date(this.getFullYear(), 0, 1);
        jul = new Date(this.getFullYear(), 6, 1);
        julOffset = jul.getTimezoneOffset();
        janOffset = jan.getTimezoneOffset();
        if (janOffset > 0 && julOffset > 0) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return Math.max(janOffset, julOffset);
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return Math.min(janOffset, julOffset);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    Date.prototype.dst = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.getTimezoneOffset() < this.stdTimezoneOffset();
    };
    $.ig.findPath = function (dsObj, resKey) {
        var __start = new Date().getTime();
        var resPath, ds = dsObj;
        resPath = resKey.split('.');
        if (resPath.length > 0) {
            for (i = 0; i < resPath.length; i++) {
                if (ds) {
                    ds = ds[resPath[i]];
                } else {
                    break;
                }
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return ds;
    }, $.ig.formatter = function (val, type, format, notTemplate, enableUTCDates, displayStyle) {
        var __start = new Date().getTime();
        var min, y, h, m, s, ms, am, e, pattern, len, n, dot, gr, gr0, grps, curS, percS, cur, perc, prefix, i, d = val && val.getTime, reg = $.ig.regional.defaults, pow, display = displayStyle || 'inline-block';
        if (format === 'checkbox' && notTemplate) {
            s = '<span style="width:100%;display:' + display + ';overflow:hidden;text-align:center;">';
            s += '<span class="ui-state-default ui-corner-all ui-igcheckbox-small" style="display:inline-block">';
            s += '<span style="display:block" class="' + (val ? '' : 'ui-igcheckbox-small-off ');
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return s + 'ui-icon ui-icon-check ui-igcheckbox-small-on"></span></span></span>';
        }
        if (!val && val !== 0 && val !== false) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return '&nbsp;';
        }
        if (type === 'date' || d) {
            if (!val) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return '&nbsp;';
            }
            if (!d) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return val;
            }
            pattern = reg[format && format !== 'null' && format !== 'undefined' ? format + 'Pattern' : 'datePattern'] || format;
            if (enableUTCDates) {
                y = val.getUTCFullYear();
                m = val.getUTCMonth() + 1;
                d = val.getUTCDate();
                h = val.getUTCHours();
                min = val.getUTCMinutes();
                s = val.getUTCSeconds();
                ms = val.getUTCMilliseconds();
            } else {
                y = val.getFullYear();
                m = val.getMonth() + 1;
                d = val.getDate();
                h = val.getHours();
                min = val.getMinutes();
                s = val.getSeconds();
                ms = val.getMilliseconds();
            }
            pattern = pattern.replace('MMMM', '\x01').replace('MMM', '\x02').replace('dddd', '\x03').replace('ddd', '\x04');
            if (pattern.indexOf('t') >= 0) {
                am = h >= 12 ? reg.pm : reg.am;
                am = am || ' ';
                if (pattern.indexOf('tt') >= 0) {
                    pattern = pattern.replace('tt', 't');
                } else if (am.length > 1) {
                    am = am.substring(0, 1);
                }
                pattern = pattern.replace('t', '\x05');
            }
            if (pattern.indexOf('h') >= 0) {
                if (h > 12) {
                    h -= 12;
                }
                if (h === 0) {
                    h = 12;
                }
            }
            pattern = pattern.replace(/H/g, 'h');
            pattern = pattern.replace('yyyy', y < 10 ? '000' + y : y < 100 ? '00' + y : y < 1000 ? '0' + y : y).replace('yy', (y = y % 100) < 10 ? '0' + y : y).replace('y', y % 100).replace('MM', m < 10 ? '0' + m : m).replace('M', m);
            pattern = pattern.replace('dd', d < 10 ? '0' + d : d).replace('d', d);
            pattern = pattern.replace('hh', h < 10 ? '0' + h : h).replace('h', h).replace('mm', min < 10 ? '0' + min : min).replace('m', min).replace('ss', s < 10 ? '0' + s : s).replace('s', s);
            pattern = pattern.replace('fff', ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms).replace('ff', (ms = Math.round(ms / 10)) < 10 ? '0' + ms : ms).replace('f', Math.round(ms / 100));
            pattern = pattern.replace('\x01', reg.monthNames[m - 1]).replace('\x02', reg.monthNamesShort[m - 1]).replace('\x05', am);
            pattern = pattern.replace('\x03', reg.dayNames[val.getDay()]).replace('\x04', reg.dayNamesShort[val.getDay()]);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return pattern;
        }
        d = format === 'double';
        if (!d) {
            cur = format === (curS = 'currency');
            if (!cur) {
                perc = format === (percS = 'percent');
                if (!perc) {
                    i = format === 'int';
                }
            }
        }
        n = typeof val === 'number';
        if (d || n || i || cur || perc || type === 'number') {
            if (!n) {
                val = parseFloat(val.replace('(', '-').replace(new RegExp('[^0-9\\-eE\\' + reg.numericDecimalSeparator + '\\+]', 'gm'), '').replace(reg.numericDecimalSeparator, '.'));
            }
            if (isNaN(val)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return '&nbsp;';
            }
            prefix = cur ? curS : perc ? percS : 'numeric';
            pattern = reg[prefix + (val < 0 ? 'Negative' : 'Positive') + 'Pattern'] || 'n';
            len = format ? format.length : 0;
            if (len > 0 && ((s = format.charAt(0)) === '0' || s === '#')) {
                min = m = 0;
                dot = format.indexOf('.');
                if (dot > 0) {
                    m = len - 1 - dot;
                    while (++dot < len) {
                        if (format.charAt(dot) !== '0') {
                            break;
                        }
                        min++;
                    }
                }
            } else {
                min = reg[prefix + 'MinDecimals'] || 0;
                if (d) {
                    m = 999;
                } else {
                    m = reg[prefix + 'MaxDecimals'];
                    m = m && !i ? m : 0;
                }
            }
            if (val < 0) {
                val = -val;
            }
            if (m === 999) {
                val = val.toString(10);
            } else {
                if ($.ig.util.isIE && $.ig.util.browserVersion <= 8) {
                    pow = Math.pow(10, m);
                    val = (Math.round(pow * val) / pow).toFixed(m);
                } else {
                    val = val.toFixed(m);
                }
            }
            if ((i = val.indexOf('E')) < 0) {
                i = val.indexOf('e');
            }
            e = '';
            if (i > 0) {
                e = val.substring(i);
                val = val.substring(0, i);
            }
            dot = val.indexOf('.');
            len = val.length;
            i = 0;
            while (dot > 0 && m > min + i && val.charAt(len - 1 - i) === '0') {
                i++;
            }
            if (i > 0) {
                val = val.substring(0, len -= i);
            }
            if (dot === len - 1) {
                val = val.substring(0, dot);
            }
            if (dot > 0) {
                len = dot;
            }
            s = reg[prefix + 'DecimalSeparator'];
            if (s) {
                val = val.replace('.', s);
            }
            s = reg[prefix + 'GroupSeparator'];
            grps = s ? reg[prefix + 'Groups'] : '';
            gr = gr0 = grps.length > 0 ? grps[i = 0] : 0;
            while (gr > 0 && --len > 0) {
                if (--gr === 0) {
                    val = val.substring(0, len) + s + val.substring(len);
                    gr = grps[++i];
                    if (!gr || gr < 1) {
                        gr = gr0;
                    } else {
                        gr0 = gr;
                    }
                }
            }
            s = reg[prefix + 'Symbol'] || '';
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return pattern.replace('-', reg.negativeSign).replace('n', val + e).replace('$', s);
        }
        if (format) {
            if (format.indexOf(s = '{0}') >= 0) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return format.replace(s, val);
            }
            if (format.indexOf(s = '[0]') >= 0) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return format.replace(s, val);
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return val || val === 0 ? val : '&nbsp;';
    };
    $.ig._regional = {
        monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        dayNames: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        dayNamesShort: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],
        am: 'AM',
        pm: 'PM',
        datePattern: 'M/d/yyyy',
        dateLongPattern: 'dddd, MMMM dd, yyyy',
        dateTimePattern: 'M/d/yyyy h:mm tt',
        timePattern: 'h:mm tt',
        timeLongPattern: 'h:mm:ss tt',
        negativeSign: '-',
        numericNegativePattern: '-$n',
        numericDecimalSeparator: '.',
        numericGroupSeparator: ',',
        numericGroups: [3],
        numericMaxDecimals: 2,
        numericMinDecimals: 0,
        currencyPositivePattern: '$n',
        currencyNegativePattern: '$(n)',
        currencySymbol: '$',
        currencyDecimalSeparator: '.',
        currencyGroupSeparator: ',',
        currencyGroups: [3],
        currencyMaxDecimals: 2,
        currencyMinDecimals: 2,
        percentPositivePattern: 'n$',
        percentNegativePattern: '-n$',
        percentSymbol: '%',
        percentDecimalSeparator: '.',
        percentGroupSeparator: ',',
        percentGroups: [3],
        percentDisplayFactor: 100,
        percentMaxDecimals: 2,
        percentMinDecimals: 2
    };
    $.ig.regional = $.ig.regional || {};
    $.ig.regional.defaults = $.ig._regional;
    $.ig.setRegionalDefault = function (regional) {
        var __start = new Date().getTime();
        if ($.ui && $.ui.igEditor) {
            $.ui.igEditor.setDefaultCulture(regional);
        } else {
            $.ig.regional.defaults = $.extend($.ig._regional, typeof regional === 'string' ? $.ig.regional[regional] : regional);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.calcSummaries = function (summaryFunction, data, caller, dataType) {
        var __start = new Date().getTime();
        var sum = function (data) {
            var __start = new Date().getTime();
            var sum = 0, i;
            for (i = 0; i < data.length; i++) {
                sum += data[i];
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('sum', __ms);
            }
            return sum;
        };
        summaryFunction = summaryFunction.toLowerCase();
        if (summaryFunction.startsWith('custom')) {
            summaryFunction = 'custom';
        }
        switch (summaryFunction) {
        case 'min':
            if (data.length === 0) {
                if (dataType === 'date') {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('', __ms);
                    }
                    return null;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return 0;
            }
            return Math.min.apply(Math, data);
        case 'max':
            if (data.length === 0) {
                if (dataType === 'date') {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('', __ms);
                    }
                    return null;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return 0;
            }
            return Math.max.apply(Math, data);
        case 'sum':
            return sum(data);
        case 'avg':
            if (data.length === 0) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return 0;
            }
            return sum(data) / data.length;
        case 'count':
            return data.length;
        case 'custom':
            if (caller !== undefined && caller !== null) {
                if ($.type(caller) === 'function') {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('', __ms);
                    }
                    return caller(data);
                }
                if ($.type(caller) === 'string') {
                    caller = eval(caller);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('', __ms);
                    }
                    return caller(data);
                }
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return null;
            }
            break;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.getMaxZIndex = function (id) {
        var __start = new Date().getTime();
        var maxZ = 10000, thisZ;
        $('.ui-dialog').each(function () {
            var __start = new Date().getTime();
            if (!id || $(this)[0].id !== id) {
                thisZ = $(this).css('z-index');
                if (!isNaN(thisZ)) {
                    maxZ = Math.max(maxZ, thisZ);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
        });
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return maxZ;
    };
    $.ig.uid = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return ((1 + Math.random()) * parseInt('10000', 16)).toString(16).substring(1, 5);
    };
    $.ig.nextHashCode = 0;
    $.ig.util.ensureUniqueId = function (obj) {
        var __start = new Date().getTime();
        if (!obj.getHashCode) {
            var code = $.ig.nextHashCode++;
            obj.getHashCode = function () {
                var __start = new Date().getTime();
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('obj.getHashCode', __ms);
                }
                return code;
            };
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.getColType = function (o) {
        var __start = new Date().getTime();
        var t = typeof o;
        if (t === 'undefined') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return 'string';
        } else if (o && o.getTime && !isNaN(o.getTime()) && Object.prototype.toString.call(o) === '[object Date]') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return 'date';
        } else if (t === 'boolean') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return 'bool';
        } else if (t === 'number') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return t;
        } else if (t === 'object') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return 'object';
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return 'string';
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.typeIdentifierCache = {};
    $.ig.nextTypeIdentifier = 0;
    $.ig.Type = Class.extend({
        init: function (identifier, baseType, interfaces) {
            var __start = new Date().getTime();
            this.specializationCache = {};
            this.name = identifier;
            this.typeArguments = null;
            this.baseType = null;
            this.interfaces = null;
            if (baseType) {
                this.baseType = baseType;
            }
            if (interfaces) {
                this.interfaces = interfaces;
            }
            if ($.ig.typeIdentifierCache[identifier]) {
                this.identifier = $.ig.typeIdentifierCache[identifier];
            } else {
                this.identifier = $.ig.nextTypeIdentifier++;
                $.ig.typeIdentifierCache[identifier] = this.identifier;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        typeName: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('typeName', __ms);
            }
            return this.name;
        },
        getSpecId: function (types) {
            var __start = new Date().getTime();
            if (types.length === 1) {
                if (!types[0]) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('getSpecId', __ms);
                    }
                    return 'undef';
                } else if (!types[0].typeName) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('getSpecId', __ms);
                    }
                    return types[0].toString();
                } else if (types[0].stringId) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('getSpecId', __ms);
                    }
                    return types[0].stringId;
                } else {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('getSpecId', __ms);
                    }
                    return types[0].identifier.toString();
                }
            }
            var ret = '';
            for (var i = 0; i < types.length; i++) {
                var type = types[i];
                if (!types[0]) {
                    ret += 'undef';
                } else if (!types[0].typeName) {
                    ret += types[0].toString();
                } else if (types[0].stringId) {
                    ret += types[0].stringId;
                } else {
                    ret += types[0].identifier.toString();
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getSpecId', __ms);
            }
            return ret;
        },
        _isGenericType: null,
        isGenericType: function () {
            var __start = new Date().getTime();
            if (this._isGenericType === null) {
                this._isGenericType = this.name.indexOf('$') >= 0;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('isGenericType', __ms);
            }
            return this._isGenericType;
        },
        isGenericTypeDefinition: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('isGenericTypeDefinition', __ms);
            }
            return this.typeArguments === null && this.isGenericType();
        },
        genericTypeArguments: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('genericTypeArguments', __ms);
            }
            return this.typeArguments;
        },
        specializationCache: null,
        specialize: function () {
            var __start = new Date().getTime();
            if (!this.isGenericType()) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('specialize', __ms);
                }
                return this;
            }
            var specId = this.getSpecId(arguments);
            var ret = this.specializationCache[specId];
            if (ret) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('specialize', __ms);
                }
                return ret;
            }
            ret = new $.ig.Type(this.name, this.baseType, this.interfaces);
            var placeholders = this.typeArguments;
            var hasPlaceholders = false;
            if (placeholders) {
                hasPlaceholders = true;
            }
            ret.typeArguments = [];
            if (hasPlaceholders) {
                for (var i = 0; i < placeholders.length; i++) {
                    ret.typeArguments[i] = arguments[placeholders[i]];
                }
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    ret.typeArguments[i] = arguments[i];
                }
            }
            if (this.baseType && this.baseType.typeArguments) {
                ret.baseType = this.baseType.specialize(arguments);
            }
            if (this.interfaces) {
                ret.interfaces = [];
                for (var i = 0; i < this.interfaces.length; i++) {
                    ret.interfaces[i] = this.interfaces[i].specialize(arguments);
                }
            }
            this.specializationCache[specId] = ret;
            ret.stringId = ret.generateString();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('specialize', __ms);
            }
            return ret;
        },
        equals: function (other) {
            var __start = new Date().getTime();
            if (!(other instanceof $.ig.Type)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('equals', __ms);
                }
                return false;
            }
            if (this.identifier !== other.identifier) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('equals', __ms);
                }
                return false;
            }
            if (this.typeArguments === null && other.typeArguments === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('equals', __ms);
                }
                return true;
            }
            if (this.typeArguments === null && other.typeArguments !== null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('equals', __ms);
                }
                return false;
            }
            if (this.typeArguments !== null && other.typeArguments === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('equals', __ms);
                }
                return false;
            }
            if (this.typeArguments.length !== other.typeArguments.length) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('equals', __ms);
                }
                return false;
            }
            for (var i = 0; i < this.typeArguments.Length; i++) {
                if (!this.typeArguments[i].equals(other.typeArguements[i])) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('equals', __ms);
                    }
                    return false;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('equals', __ms);
            }
            return true;
        },
        checkEquals: function (type1, type2) {
            var __start = new Date().getTime();
            if (type1 instanceof $.ig.Type) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('checkEquals', __ms);
                }
                return type1.equals(type2);
            } else if (type2 instanceof $.ig.Type) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('checkEquals', __ms);
                }
                return type2.equals(type1);
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('checkEquals', __ms);
                }
                return type1 == type2;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('checkEquals', __ms);
            }
        },
        op_Equality: function (type1, type2) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('op_Equality', __ms);
            }
            return type1.equals(other);
        },
        op_Inequality: function (type1, type2) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('op_Inequality', __ms);
            }
            return !type1.equals(type2);
        },
        generateString: function () {
            var __start = new Date().getTime();
            if (!this.typeArguments || this.typeArguments.length == 0) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('generateString', __ms);
                }
                return this.identifier.toString();
            } else {
                var ret = this.identifier.toString() + '[';
                var first = true;
                for (var i = 0; i < this.typeArguments.count; i++) {
                    if (first) {
                        first = false;
                    } else {
                        ret += ',';
                    }
                    ret += this.typeArguments[i].toString();
                }
                ret += ']';
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('generateString', __ms);
                }
                return ret;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('generateString', __ms);
            }
        }
    }, true);
    $.ig.Object = Class.extend({
        init: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        $type: new $.ig.Type('Object')
    }, true);
    $.ig.Enum = Class.extend({
        parse: function (enumType, value, ignoreCase) {
            var __start = new Date().getTime();
            if ($.ig.util.canAssign(this.$type, enumType)) {
                var p = $.ig[enumType.name].prototype;
                if (p.hasOwnProperty(value))
                    return p[value];
                else if (ignoreCase) {
                    var upper = value.toUpperCase();
                    for (var x in p) {
                        if (x.toUpperCase() === upper) {
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('parse', __ms);
                            }
                            return p[x];
                        }
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('parse', __ms);
            }
        },
        $type: new $.ig.Type('Enum', $.ig.Object.prototype.$type)
    }, true);
    $.ig.ValueType = Class.extend({
        init: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        $type: new $.ig.Type('ValueType', $.ig.Object.prototype.$type)
    }, true);
    $.ig.INotifyPropertyChanged = Class.extend({
        init: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        _PropertyChanged: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_PropertyChanged', __ms);
            }
        },
        $type: new $.ig.Type('INotifyPropertyChanged')
    }, true);
    $.ig.PropertyChangedEventArgs = $.ig.Object.extend({
        init: function (propertyName) {
            var __start = new Date().getTime();
            this._propertyName = propertyName;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        _propertyName: null,
        propertyName: function (value) {
            var __start = new Date().getTime();
            if (arguments.length === 0) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('propertyName', __ms);
                }
                return this._propertyName;
            } else {
                this._propertyName = value;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('propertyName', __ms);
            }
        },
        $type: new $.ig.Type('PropertyChangedEventArgs', $.ig.Object.$type)
    }, true);
    $.ig.XmlNodeType = Class.extend({
        _Attribute: 2,
        _CDATA: 4,
        _Comment: 8,
        _Document: 9,
        _DocumentFragment: 11,
        _DocumentType: 10,
        _Element: 1,
        _Entity: 6,
        _EntityReference: 5,
        _Notation: 12,
        _ProcessingInstruction: 7,
        _Text: 3,
        element: 1,
        attribute: 2,
        text: 3,
        cDATA: 4,
        entityReference: 5,
        entity: 6,
        processingInstruction: 7,
        comment: 8,
        document: 9,
        documentType: 10,
        documentFragment: 11,
        notation: 12
    }, true);
    $.ig.XmlDocumentParser = Class.extend({
        parse: function (markup) {
            var __start = new Date().getTime();
            if (!window.DOMParser) {
                var parsers = [
                        'Msxml2.DOMDocument.3.0',
                        'Msxml2.DOMDocument'
                    ];
                for (var i = 0; i < parsers.length; i++) {
                    try {
                        var xmlDOM = new ActiveXObject(progIDs[i]);
                        xmlDOM.async = false;
                        xmlDOM.loadXML(markup);
                        xmlDOM.setProperty('SelectionLanguage', 'XPath');
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('parse', __ms);
                        }
                        return xmlDOM;
                    } catch (ex) {
                    }
                }
            } else {
                try {
                    var domParser = new DOMParser();
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('parse', __ms);
                    }
                    return domParser.parseFromString(markup, 'text/xml');
                } catch (ex) {
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('parse', __ms);
            }
            return null;
        }
    }, true);
    $.ig.Array = Array;
    $.ig.extendNativePrototype(Array.prototype, 'add', function (item) {
        var __start = new Date().getTime();
        this[this.length] = item;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.addToArray = function (arr, item) {
        var __start = new Date().getTime();
        arr[arr.length] = item;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.indexInArray = function (arr, item) {
        var __start = new Date().getTime();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item)
                return i;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return -1;
    };
    $.ig.arrayContains = function (arr, item) {
        var __start = new Date().getTime();
        var index = arr.indexOf(item);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return index >= 0;
    };
    $.ig.extendNativePrototype(Array.prototype, 'indexOf', function (item) {
        var __start = new Date().getTime();
        for (var i = 0; i < this.length; i++) {
            if (this[i] == item)
                return i;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return -1;
    });
    $.ig.extendNativePrototype(Array.prototype, 'copy', function (source, sourceIndex, dest, destIndex, count) {
        var __start = new Date().getTime();
        for (i = 0; i < count; i++) {
            dest[destIndex + i] = source[sourceIndex + i];
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.removeFromArray = function (arr, from, to) {
        var __start = new Date().getTime();
        var rest = arr.slice((to || from) + 1 || arr.length);
        arr.length = from < 0 ? arr.length + from : from;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return arr.push.apply(arr, rest);
    };
    $.ig.extendNativePrototype(Array.prototype, 'contains', function (item) {
        var __start = new Date().getTime();
        var index = this.indexOf(item);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return index >= 0;
    });
    $.ig.extendNativePrototype(Array.prototype, 'insert', function (index, item) {
        var __start = new Date().getTime();
        this.splice(index, 0, item);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.extendNativePrototype(Array.prototype, 'removeAt', function (i) {
        var __start = new Date().getTime();
        this.splice(i, 1);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.extendNativePrototype(Array.prototype, 'removeItem', function (item) {
        var __start = new Date().getTime();
        var index = this.indexOf(item);
        if (index >= 0) {
            this.splice(index, 1);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return true;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return false;
    });
    $.ig.extendNativePrototype(Array.prototype, 'getEnumerator', function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return new $.ig.ArrayEnumerator(this);
    });
    $.ig.extendNativePrototype(Array.prototype, 'count', function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return this.length;
    });
    $.ig.extendNativePrototype(Array.prototype, 'item', function (index, value) {
        var __start = new Date().getTime();
        if (arguments.length === 2) {
            this[index] = value;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return value;
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return this[index];
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.extendNativePrototype(Array.prototype, 'getLength', function (dimension) {
        var __start = new Date().getTime();
        if (dimension === 0) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return this.length;
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return this.dimensionLength[dimension - 1];
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.extendNativePrototype(Array.prototype, 'clear', function () {
        var __start = new Date().getTime();
        this.length = 0;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.extendNativePrototype(Array.prototype, 'resize', function () {
        var __start = new Date().getTime();
        this.length = 0;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.ArrayEnumerator = Class.extend({
        init: function (array) {
            var __start = new Date().getTime();
            this._array = array;
            this._index = -1;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        current: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('current', __ms);
            }
            return this._array[this._index];
        },
        moveNext: function () {
            var __start = new Date().getTime();
            this._index++;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('moveNext', __ms);
            }
            return this._index < this._array.length;
        },
        reset: function () {
            var __start = new Date().getTime();
            this._index = -1;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('reset', __ms);
            }
        }
    }, true);
    $.ig.Date = Class.extend({
        init: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        $type: new $.ig.Type('Date', $.ig.Object.$type)
    }, true);
    $.ig.Date.prototype.now = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return new Date();
    };
    $.ig.Date.prototype.minValue = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return new Date(1, 1, 1, 0, 0, 0, 0);
    };
    $.ig.Date.prototype.maxValue = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return new Date(9999, 12, 31, 23, 59, 59, 0.9999999);
    };
    $.ig.Date.prototype.fromMilliseconds = function (value) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return value;
    };
    $.ig.util.canAssign = function (targetType, type) {
        var __start = new Date().getTime();
        if ($.ig.Type.prototype.checkEquals(targetType, type)) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return true;
        }
        if (type.interfaces) {
            for (var i = 0; i < type.interfaces.length; i++) {
                if ($.ig.util.canAssign(targetType, type.interfaces[i])) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('', __ms);
                    }
                    return true;
                }
            }
        }
        if (type.baseType) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return $.ig.util.canAssign(targetType, type.baseType);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return false;
    };
    $.ig.util.cast = function (targetType, obj) {
        var __start = new Date().getTime();
        if (obj == null) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        var type = obj;
        if (obj.$type) {
            type = obj.$type;
        }
        if ($.ig.util.canAssign(targetType, type)) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return obj;
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.Dictionary = Class.extend({
        init: function () {
            var __start = new Date().getTime();
            this.proxy = {};
            this.keysHolder = this.proxy;
            this._count = 0;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        $type: new $.ig.Type('Dictionary', $.ig.Object.prototype.$type),
        proxy: null
    }, true);
    $.ig.Dictionary.prototype.getDictionary = function (o) {
        var __start = new Date().getTime();
        var dict = new $.ig.Dictionary();
        dict.proxy = o;
        dict.keysHolder = o;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return dict;
    };
    $.ig.Dictionary.prototype.containsKey = function (key) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.proxy[key] !== undefined;
    };
    $.ig.Dictionary.prototype.count = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this._count;
    };
    $.ig.Dictionary.prototype.item = function (key, value) {
        var __start = new Date().getTime();
        if (arguments.length === 1) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return this.proxy[key];
        } else {
            if (!this.proxy[key]) {
                this._count++;
            }
            this.proxy[key] = value;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.Dictionary.prototype.add = function (key, value) {
        var __start = new Date().getTime();
        if (!this.proxy[key]) {
            this._count++;
        }
        this.proxy[key] = value;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.Dictionary.prototype.remove = function (key) {
        var __start = new Date().getTime();
        delete this.proxy[key];
        this._count--;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.Dictionary.prototype.keys = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return new $.ig.KeyEnumerator(this);
    };
    $.ig.Dictionary.prototype.values = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return new $.ig.ValueEnumerator(this);
    };
    $.ig.Dictionary.prototype.clear = function () {
        var __start = new Date().getTime();
        this.proxy = {};
        this.keysHolder = this.proxy;
        this._count = 0;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.EventArgs = $.ig.Object.extend({
        init: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        }
    }, true);
    $.ig.String = Class.extend({ $type: new $.ig.Type('String', $.ig.Object.prototype.$type) }, true);
    $.ig.String.prototype.isDigit = function (str, index) {
        var __start = new Date().getTime();
        index = index || 0;
        var ch = str.charAt(index);
        if (ch >= '0' && ch <= '9')
            return true;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return false;
    };
    $.ig.Number = Class.extend({ $type: new $.ig.Type('Number', $.ig.Object.prototype.$type) }, true);
    $.ig.Number.prototype.parseInt = function (a, b) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return parseInt(a, b);
    };
    $.ig.Number.prototype.log10 = function (x) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return Math.log(x) / Math.log(10);
    };
    $.ig.Single = Class.extend({}, true);
    $.ig.Single.prototype.parseFloat = function (s) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return parseFloat(s);
    };
    $.ig.Single.prototype.isInfinity = function (s) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return s === Infinity || s === -Infinity;
    };
    $.ig.Int32 = Class.extend({ $type: new $.ig.Type('Int32', $.ig.Object.prototype.$type) }, true);
    $.ig.Double = Class.extend({ $type: new $.ig.Type('Double', $.ig.Object.prototype.$type) }, true);
    $.ig.Delegate = Class.extend({ $type: new $.ig.Type('Delegate', $.ig.Object.prototype.$type) }, true);
    $.ig.Delegate.prototype.combine = function (del1, del2) {
        var __start = new Date().getTime();
        if (!del1) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return del2;
        }
        if (!del2) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return del1;
        }
        var ret = function () {
            var __start = new Date().getTime();
            del1.apply(null, arguments);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('ret', __ms);
            }
            return del2.apply(null, arguments);
        };
        ret.enumerate = function (arr) {
            var __start = new Date().getTime();
            if (del1) {
                if (del1.enumerate) {
                    del1.enumerate(arr);
                } else {
                    arr.push(del1);
                }
            }
            if (del2) {
                if (del2.enumerate) {
                    del2.enumerate(arr);
                } else {
                    arr.push(del2);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('ret.enumerate', __ms);
            }
        };
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return ret;
    };
    $.ig.Delegate.prototype.remove = function (del1, del2) {
        var __start = new Date().getTime();
        if (!del1) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        if (!del2) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return del1;
        }
        var arr = [];
        var del = null;
        if (del1.enumerate) {
            del1.enumerate(arr);
        } else {
            arr.push(del1);
        }
        for (var i = 0; i < arr.length; i++) {
            if (del2.original) {
                if (arr[i].original == del2.original && arr[i].target == del2.target) {
                    continue;
                }
            }
            if (arr[i] == del2) {
                continue;
            }
            del = $.ig.Delegate.prototype.combine(del, arr[i]);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return del;
    };
    $.ig.ReflectionUtil = Class.extend({ $type: new $.ig.Type('ReflectionUtil', $.ig.Object.prototype.$type) }, true);
    $.ig.ReflectionUtil.prototype.getPropertyGetter = function (type, propertyName) {
        var __start = new Date().getTime();
        if (typeof type.prototype[propertyName] === 'function') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return function (instance) {
                var __start = new Date().getTime();
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
                return type.prototype[propertyName].apply(instance, arguments);
            };
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return function (instance) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return instance[propertyName];
        };
    };
    $.ig.IEnumerable = Class.extend({ $type: new $.ig.Type('IEnumerable', null) }, true);
    $.ig.IEnumerator = Class.extend({ $type: new $.ig.Type('IEnumerator', null) }, true);
    $.ig.IEqualityComparer$1 = Class.extend({ $type: new $.ig.Type('IEqualityComparer', $.ig.Object.prototype.$type) }, true);
    $.ig.IList = Class.extend({ $type: new $.ig.Type('IList', null, [$.ig.IEnumerable.prototype.$type]) }, true);
    $.ig.Error = Class.extend({
        init: function (initNumber) {
            var __start = new Date().getTime();
            if (initNumber > 0) {
                switch (initNumber) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('init', __ms);
                }
                return;
            }
            this.__message = null;
            this.__innerException = null;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        init1: function (initNumber, message) {
            var __start = new Date().getTime();
            this.__message = message;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init1', __ms);
            }
        },
        init2: function (initNumber, message, innerException) {
            var __start = new Date().getTime();
            this.__message = message;
            this.__innerException = innerException;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init2', __ms);
            }
        },
        $type: new $.ig.Type('Error', $.ig.Object.prototype.$type)
    }, true);
    $.ig.Error.prototype.message = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.__message;
    };
    $.ig.Error.prototype.innerException = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.__innerException;
    };
    $.ig.IDictionary = Class.extend({ $type: new $.ig.Type('IDictionary', null) }, true);
    $.ig.ValueEnumerator = Class.extend({
        init: function (dict) {
            var __start = new Date().getTime();
            this._dict = dict;
            this._index = -1;
            this._count = 0;
            this._values = [];
            for (var item in this._dict.proxy) {
                this._values[this._count] = this._dict.proxy[item];
                this._count++;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        current: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('current', __ms);
            }
            return this._values[this._index];
        },
        moveNext: function () {
            var __start = new Date().getTime();
            this._index++;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('moveNext', __ms);
            }
            return this._index < this._count;
        },
        reset: function () {
            var __start = new Date().getTime();
            this._index = -1;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('reset', __ms);
            }
        },
        getEnumerator: function () {
            var __start = new Date().getTime();
            this.reset();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getEnumerator', __ms);
            }
            return this;
        },
        $type: new $.ig.Type('ValueEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
    }, true);
    $.ig.KeyEnumerator = Class.extend({
        init: function (dict) {
            var __start = new Date().getTime();
            this._dict = dict;
            this._index = -1;
            this._count = 0;
            this._keys = [];
            for (var item in this._dict.proxy) {
                this._keys[this._count] = item;
                this._count++;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        current: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('current', __ms);
            }
            return this._keys[this._index];
        },
        moveNext: function () {
            var __start = new Date().getTime();
            this._index++;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('moveNext', __ms);
            }
            return this._index < this._count;
        },
        reset: function () {
            var __start = new Date().getTime();
            this._index = -1;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('reset', __ms);
            }
        },
        getEnumerator: function () {
            var __start = new Date().getTime();
            this.reset();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getEnumerator', __ms);
            }
            return this;
        },
        $type: new $.ig.Type('KeyEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
    }, true);
    $.ig.intDivide = function (int1, int2) {
        var __start = new Date().getTime();
        var result = int1 / int2;
        if (result >= 0) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return Math.floor(result);
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return Math.ceil(result);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.Nullable = Class.extend({
        getUnderlyingType: function (nullableType) {
            var __start = new Date().getTime();
            if (nullableType.isGenericType !== undefined && nullableType.isGenericType() && !nullableType.isGenericTypeDefinition() && $.ig.Nullable$1.prototype.$type.typeName() == nullableType.typeName()) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getUnderlyingType', __ms);
                }
                return nullableType.genericTypeArguments()[0];
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getUnderlyingType', __ms);
            }
            return null;
        },
        $type: new $.ig.Type('Nullable', $.ig.Object.prototype.$type)
    }, true);
    $.ig.Nullable$1 = Class.extend({
        $t: null,
        init: function ($t, value) {
            var __start = new Date().getTime();
            this.$t = $t;
            this.$type = this.$type.specialize(this.$t);
            $.ig.Object.prototype.init.call(this);
            if (value !== undefined) {
                this._value = value;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        hasValue: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('hasValue', __ms);
            }
            return this._value !== null;
        },
        _value: null,
        value: function (value) {
            var __start = new Date().getTime();
            if (arguments.length === 1) {
                this._value = value;
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('value', __ms);
                }
                return this._value;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('value', __ms);
            }
        },
        getValueOrDefault: function () {
            var __start = new Date().getTime();
            if (this.hasValue()) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getValueOrDefault', __ms);
                }
                return this._value;
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getValueOrDefault', __ms);
                }
                return getDefaultValue();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getValueOrDefault', __ms);
            }
        },
        getDefaultValue: function () {
            var __start = new Date().getTime();
            if ($.ig.util.canAssign($.ig.Number.prototype.$type, $t)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getDefaultValue', __ms);
                }
                return 0;
            } else if ($.ig.util.canAssign($.ig.Boolean.prototype.$type, $t)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getDefaultValue', __ms);
                }
                return false;
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getDefaultValue', __ms);
                }
                return null;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getDefaultValue', __ms);
            }
        },
        getValueOrDefault1: function (defaultValue) {
            var __start = new Date().getTime();
            if (this.hasValue()) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getValueOrDefault1', __ms);
                }
                return this._value;
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getValueOrDefault1', __ms);
                }
                return defaultValue;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getValueOrDefault1', __ms);
            }
        },
        isNullable: true,
        $type: new $.ig.Type('Nullable$1', $.ig.Object.prototype.$type)
    }, true);
    $.ig.util.toNullable = function (t, value) {
        var __start = new Date().getTime();
        if (value && value.isNullable) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return value;
        }
        var ret = new $.ig.Nullable$1(t, value);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return ret;
    };
    $.ig.util.nullableAdd = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 + val2);
    };
    $.ig.util.nullableSubtract = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 - val2);
    };
    $.ig.util.nullableMultiply = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 * val2);
    };
    $.ig.util.nullableDivide = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 / val2);
    };
    $.ig.util.nullableModulus = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 % val2);
    };
    $.ig.util.nullableGreaterThan = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return val1 > val2;
    };
    $.ig.util.nullableGreaterThanOrEqual = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return val1 >= val2;
    };
    $.ig.util.nullableLessThan = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return val1 < val2;
    };
    $.ig.util.nullableLessThanOrEqual = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return val1 <= val2;
    };
    $.ig.util.nullableEquals = function (v1, v2) {
        var __start = new Date().getTime();
        var v1IsNull = v1 == null || v1.IsNullable && !v1.hasValue();
        var v2IsNull = v2 == null || v2.IsNullable && !v2.hasValue();
        if (v1IsNull && v2IsNull) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return true;
        }
        if (v1IsNull != v2IsNull) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return val1 == val2;
    };
    $.ig.util.nullableNotEquals = function (v1, v2) {
        var __start = new Date().getTime();
        if (v1.isNullable && !v1.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        if (v2.isNullable && !v2.hasValue()) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        var val1 = v1;
        var val2 = v2;
        if (v1.isNullable) {
            val1 = v1.value();
        }
        if (v2.isNullable) {
            val2 = v2.value();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return val1 != val2;
    };
    $.ig.util.wellKnownColors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    $.ig.util.stringToColor = function (str) {
        var __start = new Date().getTime();
        var ret = {
                a: 255,
                r: 0,
                g: 0,
                b: 0
            };
        var asColorName = str.replace(' ', '').toLowerCase();
        if (asColorName === 'transparent') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return {
                a: 0,
                r: 0,
                g: 0,
                b: 0
            };
        }
        if ($.ig.util.wellKnownColors[asColorName] !== undefined) {
            str = $.ig.util.wellKnownColors[asColorName];
        }
        if (str.lastIndexOf('rgba', 0) === 0) {
            str = str.replace('rgba', '').replace(' ', '').replace('(', '').replace(')', '');
            var parts = str.split(',');
            ret.r = parseInt(parts[0]);
            ret.g = parseInt(parts[1]);
            ret.b = parseInt(parts[2]);
            ret.a = parseFloat(parts[3]) * 255;
        } else if (str.lastIndexOf('rgb', 0) === 0) {
            str = str.replace('rgb', '').replace(' ', '').replace('(', '').replace(')', '');
            var parts = str.split(',');
            ret.r = parseInt(parts[0]);
            ret.g = parseInt(parts[1]);
            ret.b = parseInt(parts[2]);
        } else {
            str = str.replace('#', '').replace(' ', '');
            if (str.length === 6) {
                ret.r = parseInt(str.substr(0, 2), 16);
                ret.g = parseInt(str.substr(2, 2), 16);
                ret.b = parseInt(str.substr(4, 2), 16);
            } else if (str.length === 3) {
                ret.r = parseInt(str.substr(0, 1) + str.substr(0, 1), 16);
                ret.g = parseInt(str.substr(1, 1) + str.substr(1, 1), 16);
                ret.b = parseInt(str.substr(2, 1) + str.substr(2, 1), 16);
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return ret;
    };
    $.ig.util.isResponseTypeSupported = function (responseType) {
        var __start = new Date().getTime();
        var xhr = null;
        try {
            xhr = new XMLHttpRequest();
            xhr.open('GET', '/');
            xhr.responseType = responseType;
        } catch (e) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        if (xhr === null) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return false;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return xhr.responseType === responseType;
    };
    $.ig.util.getBinary = function (url, callback, error) {
        var __start = new Date().getTime();
        var data, ret, req, useVbArray = false, arrayBufferSupported = $.ig.util.isResponseTypeSupported('arraybuffer') && typeof Uint8Array != 'undefined';
        if (typeof XMLHttpRequest == 'undefined') {
            try {
                req = ActiveXObject('Msxml2.XMLHTTP.6.0');
            } catch (e) {
            }
            try {
                req = ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (e) {
            }
            req = new ActiveXObject('Microsoft.XMLHTTP');
        } else {
            req = new XMLHttpRequest();
        }
        if (!arrayBufferSupported) {
            if (req.overrideMimeType) {
                req.overrideMimeType('text/plain; charset=x-user-defined');
            } else {
                if (typeof VBArray != 'undefined') {
                    useVbArray = true;
                }
            }
        }
        req.onreadystatechange = function () {
            var __start = new Date().getTime();
            if (req.readyState == 4) {
                if (req.status == 200) {
                    if (arrayBufferSupported) {
                        callback(new Uint8Array(this.response));
                    } else {
                        if (useVbArray) {
                            data = new VBArray(req.responseBody).toArray();
                            for (var i = 0; i < data.length; i++) {
                                data[i] = String.fromCharCode(data[i]);
                            }
                            ret = data.join('');
                            callback(ret);
                        } else {
                            callback(req.responseText);
                        }
                    }
                } else {
                    error(req.error);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('req.onreadystatechange', __ms);
            }
        };
        req.open('GET', url, true);
        if (arrayBufferSupported) {
            req.responseType = 'arraybuffer';
        }
        req.send(null);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.util.extCopy = function (source, bindings) {
        var __start = new Date().getTime();
        var i, j, k;
        for (j = 0; j < bindings.length; j++) {
            var dests = bindings[j][0];
            var meths = bindings[j][1];
            for (k = 0; k < dests.length; k++) {
                for (i = 0; i < meths.length; i++) {
                    $.ig.extendNativePrototype(dests[k].prototype, meths[i], source.prototype[meths[i]]);
                }
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.util.bulkDefine = function (toDefine) {
        var __start = new Date().getTime();
        var i = 0, curr = null, els = null;
        for (i = 0; i < toDefine.length; i++) {
            curr = toDefine[i];
            els = curr.split(':');
            $.ig[curr] = $.ig[curr] || Class.extend({
                $type: new $.ig.Type(curr, $.ig.Object.prototype.$type),
                $placeholder: true
            }, true);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.util.defType = function (name, baseName, definition) {
        var __start = new Date().getTime();
        var define = true;
        if ($.ig[name] && !$.ig[name].prototype.$placeholder) {
            define = false;
        }
        if (define) {
            $.ig[name] = $.ig[baseName].extend(definition);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.util.getClassCount = function (classNamePrefix, isPrefix) {
        var __start = new Date().getTime();
        var styleSheets = document.styleSheets, numFound = 0, count = 0, currSheet, rules, currSelector, currVal;
        classNamePrefix = classNamePrefix.toLowerCase();
        if (!styleSheets) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return 0;
        }
        for (var i = 0; i < styleSheets.length; i++) {
            try {
                currSheet = styleSheets[i];
                rules = currSheet.rules ? currSheet.rules : currSheet.cssRules;
                if (!rules) {
                    continue;
                }
                for (var j = 0; j < rules.length; j++) {
                    currSelector = rules[j].selectorText;
                    if (currSelector) {
                        currSelector = currSelector.toLowerCase();
                        if (isPrefix) {
                            if (currSelector.indexOf(classNamePrefix) == 0) {
                                currVal = parseInt(currSelector.replace(classNamePrefix, ''));
                                if (isNaN(currVal)) {
                                    count++;
                                } else {
                                    numFound = Math.max(numFound, currVal);
                                }
                            }
                        } else {
                            if (currSelector == classNamePrefix) {
                                numFound++;
                            }
                        }
                    }
                }
            } catch (e) {
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return Math.max(numFound, count);
    };
    $.ig.util._isCanvasSupported = function () {
        var __start = new Date().getTime();
        var canvas = document.createElement('canvas');
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return !!(canvas.getContext && canvas.getContext('2d'));
    };
    $.ig.util._renderUnsupportedBrowser = function (widget, locale) {
        var __start = new Date().getTime();
        if (!widget.events || !widget.events.browserNotSupported || widget._trigger(widget.events.browserNotSupported)) {
            var elem = widget.element, o = widget.options, locale = locale || $.ig.util.locale, container = $('<div></div>').css('overflow', 'auto').addClass(widget.css.unsupportedBrowserClass).appendTo(elem), ul, browserUnsupported;
            if ($.ig.util.isIE) {
                browserUnsupported = 'Internet Explorer ' + $.ig.util.browserVersion;
            } else if ($.ig.util.isOpera) {
                browserUnsupported = 'Opera ' + $.ig.util.browserVersion;
            } else if ($.ig.util.isWebKit) {
                browserUnsupported = 'Webkit ' + $.ig.util.browserVersion;
            } else if ($.ig.util.isFF) {
                browserUnsupported = 'Mozilla Firefox ' + $.ig.util.browserVersion;
            } else {
                browserUnsupported = $.ig.util.browserVersion;
            }
            $('<div></div>').addClass('ui-html5-current-browser-label').html(locale.currentBrowser.replace('{0}', browserUnsupported)).appendTo(container);
            $('<div></div>').addClass('ui-html5-non-html5-text').html(locale.unsupportedBrowser).appendTo(container);
            ul = $('<ul></ul>').addClass('ui-html5-browsers-list').appendTo(container);
            $('<a></a>').attr('href', locale.chromeDownload).attr('target', '_blank').addClass('ui-html5-chrome-icon').html(locale.chrome8).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
            $('<a></a>').attr('href', locale.firefoxDownload).attr('target', '_blank').addClass('ui-html5-firefox-icon').html(locale.firefox36).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
            $('<a></a>').attr('href', locale.operaDownload).attr('target', '_blank').addClass('ui-html5-Opera-icon').html(locale.opera11).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
            $('<a></a>').attr('href', locale.safariDownload).attr('target', '_blank').addClass('ui-html5-safari-icon').html(locale.safari5).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
            $('<a></a>').attr('href', locale.ieDownload).attr('target', '_blank').addClass('ui-html5-ie-icon').html(locale.ie9).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
            if (widget.css.unsupportedBrowserClass.indexOf(' ui-html5-non-html5') === -1) {
                elem.addClass('ui-html5-non-html5');
            }
            if (o.width) {
                elem.css('width', o.width);
            }
            if (o.height) {
                elem.css('height', o.height);
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    (function ($) {
        var __start = new Date().getTime();
        $.ig.util.profiler = {};
        var methods = {};
        $.ig.util.profiler.recordTime = function (methodName, time) {
            var __start = new Date().getTime();
            var key = 'meth: ' + methodName;
            if (!methods[key]) {
                methods[key] = [];
            }
            methods[key][methods[key].length] = time;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
        };
        $.ig.util.profiler.reset = function () {
            var __start = new Date().getTime();
            methods = {};
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
        };
        $.ig.util.profiler.logReport = function () {
            var __start = new Date().getTime();
            var meths = [];
            var j = 0;
            var sum = 0;
            var avg = 0;
            for (var prop in methods) {
                if (prop.indexOf('meth:') === 0) {
                    var meth = {};
                    meth.name = prop.substr(5);
                    sum = 0;
                    for (var i = 0; i < methods[prop].length; i++) {
                        sum = sum + methods[prop][i];
                    }
                    var avg = sum / methods[prop].length;
                    meth.avg = avg;
                    meth.callCount = methods[prop].length;
                    meths[j] = meth;
                    j++;
                }
            }
            meths.sort(function (m1, m2) {
                var __start = new Date().getTime();
                if (m1.avg < m2.avg) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                    return 1;
                }
                if (m1.avg > m2.avg) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                    return -1;
                }
                if (m1.avg == m2.avg) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                    return 0;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            });
            for (var k = 0; k < Math.min(200, meths.length); k++) {
                console.log(meths[k].name + ' avg: ' + meths[k].avg + ' callCount: ' + meths[k].callCount);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
        };
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    }(jQuery));
    $.ig.extendNativePrototype(Function.prototype, 'invoke', function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return this.apply(null, arguments);
    });
    $.ig.extendNativePrototype(Function.prototype, 'runOn', function (target) {
        var __start = new Date().getTime();
        var self = this;
        var ret = function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('ret', __ms);
            }
            return self.apply(target, arguments);
        };
        ret.original = this;
        ret.target = target;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return ret;
    });
    String.prototype.startsWith = function (s) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.indexOf(s) === 0;
    };
    String.prototype.endsWith = function (s) {
        var __start = new Date().getTime();
        var offset = this.length - s.length;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return offset >= 0 && this.lastIndexOf(s) === offset;
    };
    String.prototype.remove = function (index, count) {
        var __start = new Date().getTime();
        if (!count || index + count > this.length) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return this.substr(0, index);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.substr(0, index) + this.substr(index + count);
    };
    String.prototype.compareTo = function (other) {
        var __start = new Date().getTime();
        if (this == other) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return 0;
        }
        if (this < other) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return -1;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return 1;
    };
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        };
    }
    String.prototype.fullTrim = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
    };
    String.prototype.trimStart = function () {
        var __start = new Date().getTime();
        var args = [' '];
        if (arguments.length > 0) {
            args = Array.prototype.slice.call(arguments);
        }
        if (this.length == 0)
            return this;
        var i = 0;
        for (; args.indexOf(this.charAt(i)) > -1 && i < this.length; i++);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.substring(i);
    };
    String.prototype.trimEnd = function () {
        var __start = new Date().getTime();
        var args = [' '];
        if (arguments.length > 0) {
            args = Array.prototype.slice.call(arguments);
        }
        var i = this.length - 1;
        for (; i >= 0 && args.indexOf(this.charAt(i)) > -1; i--);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.substring(0, i + 1);
    };
    String.getHashCode = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.getHashCode', __ms);
        }
        return this;
    };
    String.isNullOrEmpty = function (s) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.isNullOrEmpty', __ms);
        }
        return !s || s.length < 1;
    };
    String.empty = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.empty', __ms);
        }
        return '';
    };
    String.concat = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.concat1 = function (o1, o2) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat1', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.concat2 = function (s1, s2) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat2', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.concat3 = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat3', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.concat4 = function (o1, o2, o3) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat4', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.concat5 = function (s1, s2, s3) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat5', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.concat6 = function (o1, o2, o3, o4) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat6', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.concat7 = function (s1, s2, s3, s4) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('String.concat7', __ms);
        }
        return [].join.call(arguments, '');
    };
    String.prototype.equals = function (other) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this == other;
    };
    String.prototype.contains = function (s) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.indexOf(s) > -1;
    };
    String.prototype.padLeft = function (len, c) {
        var __start = new Date().getTime();
        var s = this, c = c || ' ';
        while (s.length < len) {
            s = c + s;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return s;
    };
    String.prototype.padRight = function (len, c) {
        var __start = new Date().getTime();
        var s = this, c = c || ' ';
        while (s.length < len) {
            s += c;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return s;
    };
    String.prototype.capitalize = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
    if (!Array.prototype.filter) {
        Array.prototype.filter = function (fun) {
            var __start = new Date().getTime();
            var t, len, res, thisp, val, i;
            if (this == null) {
                throw new TypeError();
            }
            t = Object(this);
            len = t.length >>> 0;
            if (typeof fun != 'function') {
                throw new TypeError();
            }
            res = [];
            thisp = arguments[1];
            for (i = 0; i < len; i++) {
                if (i in t) {
                    val = t[i];
                    if (fun.call(thisp, val, i, t)) {
                        res.push(val);
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return res;
        };
    }
    $.ig.extendNativePrototype(Array.prototype, 'insertRange', function (index, items) {
        var __start = new Date().getTime();
        var i = 0;
        if (this.length == 0) {
            for (i = 0; i < items.length; i++) {
                this[index++] = items[i];
            }
        } else {
            for (i = 0; i < items.length; i++) {
                this.splice(index++, 0, items[i]);
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.extendNativePrototype(Array.prototype, 'insertRange1', function (index, items) {
        var __start = new Date().getTime();
        var i = 0;
        if (this.length == 0) {
            for (i = 0; i < items.length; i++) {
                this[index++] = items[i];
            }
        } else {
            for (i = 0; i < items.length; i++) {
                this.splice(index++, 0, items[i]);
            }
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    $.ig.extendNativePrototype(Array.prototype, 'clone', function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return $.extend(true, [], this);
    });
    $.ig.extendNativePrototype(Array.prototype, 'clear', function () {
        var __start = new Date().getTime();
        this.length = 0;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    Math.log10 = function (n) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('Math.log10', __ms);
        }
        return Math.log(n) / Math.log(10);
    };
    Math.logBase = function (n, n2) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('Math.logBase', __ms);
        }
        return Math.log(n) / Math.log(n2);
    };
    Math.sign = function (n) {
        var __start = new Date().getTime();
        if (n < 0) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('Math.sign', __ms);
            }
            return -1;
        } else if (n > 0) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('Math.sign', __ms);
            }
            return 1;
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('Math.sign', __ms);
            }
            return 0;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('Math.sign', __ms);
        }
    };
    Number.getHashCode = function () {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('Number.getHashCode', __ms);
        }
        return this;
    };
    Number.isInfinity = function (n) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('Number.isInfinity', __ms);
        }
        return n === Infinity || n === -Infinity;
    };
    window.toStaticHTML = window.toStaticHTML || function (s) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
        return s;
    };
    window.MSApp = window.MSApp || {};
    window.MSApp.execUnsafeLocalFunction = window.MSApp.execUnsafeLocalFunction || function (fn) {
        var __start = new Date().getTime();
        fn.apply();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    };
    $.ig.util.jQueryUIMainVersion = $.ui && $.ui.version && $.ui.version.length > 0 ? parseInt($.ui.version.split('.', 1)[0], 10) : null;
    $.ig.util.jQueryUISubVersion = $.ui && $.ui.version && $.ui.version.length > 0 ? parseInt($.ui.version.split('.', 2)[1], 10) : null;
    $.ig.util.jqueryFlagsCache = {};
    $.ig.util.jqueryCreateFlags = function (flags) {
        var __start = new Date().getTime();
        var object = $.ig.util.jqueryFlagsCache[flags] = {}, i, length;
        flags = flags.split(/\s+/);
        for (i = 0, length = flags.length; i < length; i++) {
            object[flags[i]] = true;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return object;
    };
    $.ig.util.jqueryCallbacks = function (flags) {
        var __start = new Date().getTime();
        flags = flags ? $.ig.util.jqueryFlagsCache[flags] || $.ig.util.jqueryCreateFlags(flags) : {};
        var list = [], stack = [], memory, fired, firing, firingStart, firingLength, firingIndex, add = function (args) {
                var __start = new Date().getTime();
                var i, length, elem, type, actual;
                for (i = 0, length = args.length; i < length; i++) {
                    elem = args[i];
                    type = jQuery.type(elem);
                    if (type === 'array') {
                        add(elem);
                    } else if (type === 'function') {
                        if (!flags.unique || !self.has(elem)) {
                            list.push(elem);
                        }
                    }
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('add', __ms);
                }
            }, fire = function (context, args) {
                var __start = new Date().getTime();
                args = args || [];
                memory = !flags.memory || [
                    context,
                    args
                ];
                fired = true;
                firing = true;
                firingIndex = firingStart || 0;
                firingStart = 0;
                firingLength = list.length;
                for (; list && firingIndex < firingLength; firingIndex++) {
                    if (list[firingIndex].apply(context, args) === false && flags.stopOnFalse) {
                        memory = true;
                        break;
                    }
                }
                firing = false;
                if (list) {
                    if (!flags.once) {
                        if (stack && stack.length) {
                            memory = stack.shift();
                            self.fireWith(memory[0], memory[1]);
                        }
                    } else if (memory === true) {
                        self.disable();
                    } else {
                        list = [];
                    }
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('fire', __ms);
                }
            }, self = {
                add: function () {
                    var __start = new Date().getTime();
                    if (list) {
                        var length = list.length;
                        add(arguments);
                        if (firing) {
                            firingLength = list.length;
                        } else if (memory && memory !== true) {
                            firingStart = length;
                            fire(memory[0], memory[1]);
                        }
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('add', __ms);
                    }
                    return this;
                },
                remove: function () {
                    var __start = new Date().getTime();
                    if (list) {
                        var args = arguments, argIndex = 0, argLength = args.length;
                        for (; argIndex < argLength; argIndex++) {
                            for (var i = 0; i < list.length; i++) {
                                if (args[argIndex] === list[i]) {
                                    if (firing) {
                                        if (i <= firingLength) {
                                            firingLength--;
                                            if (i <= firingIndex) {
                                                firingIndex--;
                                            }
                                        }
                                    }
                                    list.splice(i--, 1);
                                    if (flags.unique) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('remove', __ms);
                    }
                    return this;
                },
                has: function (fn) {
                    var __start = new Date().getTime();
                    if (list) {
                        var i = 0, length = list.length;
                        for (; i < length; i++) {
                            if (fn === list[i]) {
                                {
                                    var __ms = new Date().getTime() - __start;
                                    _putstat('has', __ms);
                                }
                                return true;
                            }
                        }
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('has', __ms);
                    }
                    return false;
                },
                empty: function () {
                    var __start = new Date().getTime();
                    list = [];
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('empty', __ms);
                    }
                    return this;
                },
                disable: function () {
                    var __start = new Date().getTime();
                    list = stack = memory = undefined;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('disable', __ms);
                    }
                    return this;
                },
                disabled: function () {
                    var __start = new Date().getTime();
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('disabled', __ms);
                    }
                    return !list;
                },
                lock: function () {
                    var __start = new Date().getTime();
                    stack = undefined;
                    if (!memory || memory === true) {
                        self.disable();
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('lock', __ms);
                    }
                    return this;
                },
                locked: function () {
                    var __start = new Date().getTime();
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('locked', __ms);
                    }
                    return !stack;
                },
                fireWith: function (context, args) {
                    var __start = new Date().getTime();
                    if (stack) {
                        if (firing) {
                            if (!flags.once) {
                                stack.push([
                                    context,
                                    args
                                ]);
                            }
                        } else if (!(flags.once && memory)) {
                            fire(context, args);
                        }
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('fireWith', __ms);
                    }
                    return this;
                },
                fire: function () {
                    var __start = new Date().getTime();
                    self.fireWith(this, arguments);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('fire', __ms);
                    }
                    return this;
                },
                fired: function () {
                    var __start = new Date().getTime();
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('fired', __ms);
                    }
                    return !!fired;
                }
            };
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return self;
    };
    $.ig.util.jqueryDeferred = function (func) {
        var __start = new Date().getTime();
        var doneList = $.ig.util.jqueryCallbacks('once memory'), failList = $.ig.util.jqueryCallbacks('once memory'), progressList = $.ig.util.jqueryCallbacks('memory'), state = 'pending', lists = {
                resolve: doneList,
                reject: failList,
                notify: progressList
            }, promise = {
                done: doneList.add,
                fail: failList.add,
                progress: progressList.add,
                state: function () {
                    var __start = new Date().getTime();
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('state', __ms);
                    }
                    return state;
                },
                isResolved: doneList.fired,
                isRejected: failList.fired,
                then: function (doneCallbacks, failCallbacks, progressCallbacks) {
                    var __start = new Date().getTime();
                    deferred.done(doneCallbacks).fail(failCallbacks).progress(progressCallbacks);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('then', __ms);
                    }
                    return this;
                },
                always: function () {
                    var __start = new Date().getTime();
                    deferred.done.apply(deferred, arguments).fail.apply(deferred, arguments);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('always', __ms);
                    }
                    return this;
                },
                pipe: function (fnDone, fnFail, fnProgress) {
                    var __start = new Date().getTime();
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('pipe', __ms);
                    }
                    return $.ig.util.jqueryDeferred(function (newDefer) {
                        var __start = new Date().getTime();
                        jQuery.each({
                            done: [
                                fnDone,
                                'resolve'
                            ],
                            fail: [
                                fnFail,
                                'reject'
                            ],
                            progress: [
                                fnProgress,
                                'notify'
                            ]
                        }, function (handler, data) {
                            var __start = new Date().getTime();
                            var fn = data[0], action = data[1], returned;
                            if (jQuery.isFunction(fn)) {
                                deferred[handler](function () {
                                    var __start = new Date().getTime();
                                    returned = fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().then(newDefer.resolve, newDefer.reject, newDefer.notify);
                                    } else {
                                        newDefer[action + 'With'](this === deferred ? newDefer : this, [returned]);
                                    }
                                    {
                                        var __ms = new Date().getTime() - __start;
                                        _putstat('anonymous', __ms);
                                    }
                                });
                            } else {
                                deferred[handler](newDefer[action]);
                            }
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('anonymous', __ms);
                            }
                        });
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                    }).promise();
                },
                promise: function (obj) {
                    var __start = new Date().getTime();
                    if (obj == null) {
                        obj = promise;
                    } else {
                        for (var key in promise) {
                            obj[key] = promise[key];
                        }
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('promise', __ms);
                    }
                    return obj;
                }
            }, deferred = promise.promise({}), key;
        for (key in lists) {
            deferred[key] = lists[key].fire;
            deferred[key + 'With'] = lists[key].fireWith;
        }
        deferred.done(function () {
            var __start = new Date().getTime();
            state = 'resolved';
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
        }, failList.disable, progressList.lock).fail(function () {
            var __start = new Date().getTime();
            state = 'rejected';
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
        }, doneList.disable, progressList.lock);
        if (func) {
            func.call(deferred, deferred);
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return deferred;
    };
    $.ig.util.checkDeferred = function () {
        var __start = new Date().getTime();
        $.ig.util.deferredDefined = !!($.Deferred !== undefined && $.Deferred().state);
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.util.deferred = function () {
        var __start = new Date().getTime();
        if ($.ig.util.deferredDefined === undefined) {
            $.ig.util.checkDeferred();
        }
        if ($.ig.util.deferredDefined) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return $.Deferred();
        } else {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return $.ig.util.jqueryDeferred();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.util.ajax = function (url, contentType, data, method, requestOptions) {
        var __start = new Date().getTime();
        var deferred = $.ig.util.deferred();
        var isCrossDomain;
        if (requestOptions && 'isCrossDomain' in requestOptions) {
            isCrossDomain = requestOptions.isCrossDomain;
        } else {
            isCrossDomain = $.support.cors;
        }
        var xhrObj = function (rOptions) {
                var __start = new Date().getTime();
                var xhr = new XMLHttpRequest();
                if (isCrossDomain == true && !('withCredentials' in xhr || rOptions && 'withCredentials' in rOptions && rOptions.withCredentials == true) && typeof XDomainRequest != 'undefined') {
                    xhr = new XDomainRequest();
                    xhr.getResponseHeader = function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('xhr.getResponseHeader', __ms);
                        }
                        return null;
                    };
                    xhr.setRequestHeader = function () {
                        var __start = new Date().getTime();
                        xhr.status = 200;
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('xhr.setRequestHeader', __ms);
                        }
                    };
                    xhr.getAllResponseHeaders = function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('xhr.getAllResponseHeaders', __ms);
                        }
                        return null;
                    };
                    xhr.onload = function () {
                        var __start = new Date().getTime();
                        xhr.readyState = 4;
                        xhr.status = 200;
                        xhr.statusText = 'success';
                        xhr.getAllResponseHeaders = function () {
                            var __start = new Date().getTime();
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('xhr.getAllResponseHeaders', __ms);
                            }
                        };
                        xhr.onreadystatechange();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('xhr.onload', __ms);
                        }
                    };
                    xhr.onerror = function () {
                        var __start = new Date().getTime();
                        xhr.readyState = 4;
                        xhr.status = 0;
                        xhr.statusText = 'error';
                        xhr.getAllResponseHeaders = function () {
                            var __start = new Date().getTime();
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('xhr.getAllResponseHeaders', __ms);
                            }
                        };
                        xhr.onreadystatechange();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('xhr.onerror', __ms);
                        }
                    };
                    xhr.ontimeout = function () {
                        var __start = new Date().getTime();
                        xhr.readyState = 4;
                        xhr.status = 0;
                        xhr.statusText = 'timeout';
                        xhr.getAllResponseHeaders = function () {
                            var __start = new Date().getTime();
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('xhr.getAllResponseHeaders', __ms);
                            }
                        };
                        xhr.onreadystatechange();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('xhr.ontimeout', __ms);
                        }
                    };
                    xhr.onprogress = function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('xhr.onprogress', __ms);
                        }
                    };
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
                return xhr;
            }(requestOptions);
        var xhrFields;
        if ('withCredentials' in xhrObj && requestOptions && 'withCredentials' in requestOptions && requestOptions.withCredentials == true) {
            xhrFields = { withCredentials: true };
        }
        var beforeSend = function (jqXHR, options) {
            var __start = new Date().getTime();
            if (requestOptions) {
                if ($.isFunction(requestOptions.beforeSend)) {
                    jqXHR.setRequestHeader('Content-Type', contentType);
                    requestOptions.beforeSend.call(this, jqXHR, options, requestOptions);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('beforeSend', __ms);
            }
        };
        $.ajax({
            crossDomain: isCrossDomain == true,
            isLocal: false,
            url: url,
            contentType: contentType,
            data: data,
            type: method,
            dataType: 'text',
            xhrFields: xhrFields,
            beforeSend: beforeSend,
            xhr: function () {
                var __start = new Date().getTime();
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('xhr', __ms);
                }
                return xhrObj;
            },
            success: function (responce, textStatus, jqXHR) {
                var __start = new Date().getTime();
                deferred.resolve(responce);
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('success', __ms);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                var __start = new Date().getTime();
                deferred.reject(errorThrown);
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('error', __ms);
                }
            }
        });
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return deferred.promise();
    };
    $.ig.util.offset = function (e, xy) {
        var __start = new Date().getTime();
        xy = xy || e.offset();
        e = e ? e[0].ownerDocument : document;
        e = e ? e.documentElement : null;
        var z = e ? e.msContentZoomFactor : null;
        if (z && z > 1) {
            xy.left += e.scrollLeft - window.pageXOffset;
            xy.top += e.scrollTop - window.pageYOffset;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return xy;
    };
    $.ig.util.getRelativeOffset = function (e) {
        var __start = new Date().getTime();
        var elem = e.parent(), o = {
                left: 0,
                top: 0
            }, position;
        while (elem[0] !== null && elem[0] !== undefined && elem[0].nodeName !== '#document') {
            position = elem.css('position');
            if (position !== 'static' && position !== '') {
                o.left = elem.offset().left - elem.scrollLeft();
                o.top = elem.offset().top - elem.scrollTop();
                break;
            }
            elem = elem.parent();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return o;
    };
    $.ig.util.setSize = function (elem, prop, val, chart, notifyResized) {
        var __start = new Date().getTime();
        if (!elem || !elem[0]) {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return;
        }
        var timer, px, obj = elem[0]._w_s_f = elem[0]._w_s_f || {}, perc = obj.perc;
        if (!prop) {
            if (obj.tickID) {
                obj.onTick(true);
            }
            delete obj.elem;
            delete obj.chart;
            elem[0]._w_s_f = null;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return;
        }
        if (!val) {
            val = elem[prop]();
        }
        if (perc && perc.indexOf(prop) >= 0) {
            perc = perc.replace(prop, '');
        }
        if (val) {
            elem[prop](val);
            if (typeof val !== 'number') {
                val = val.toString();
                if (val.indexOf('%') > 0) {
                    perc = perc || '';
                    if (perc.indexOf(prop) < 0) {
                        timer = perc += prop;
                    }
                }
                px = val.indexOf('px');
                if (px > 0) {
                    val = val.substring(0, px);
                }
                px = parseFloat(val);
                if (px.toString() === val) {
                    val = px;
                } else {
                    val = elem[prop]();
                    if (!val) {
                        obj.wait = obj.wait || '';
                        if (obj.wait.indexOf(prop) < 0) {
                            obj.wait += prop;
                        }
                        timer = prop;
                    }
                }
            }
            obj.perc = perc;
            if (val && chart) {
                if (chart[prop]) {
                    chart[prop](val);
                }
                if (notifyResized) {
                    chart[notifyResized]();
                }
            }
        }
        if (!timer && !elem[0].offsetWidth) {
            timer = obj.wait = 'width';
        }
        if (timer) {
            obj.elem = elem;
            obj.chart = chart;
            obj.notify = notifyResized;
            obj.onTick = obj.onTick || function (stop) {
                var __start = new Date().getTime();
                var resize, obj = this, chart = obj.chart, elem = obj.elem, perc = obj.perc || '', wait = obj.wait || '', stop = stop === true || !perc && !wait, width = stop || elem[0].offsetWidth, height = stop || elem[0].offsetHeight, oldWidth = obj.oldWidth || 0, oldHeight = obj.oldHeight || 0;
                if (stop) {
                    if (obj.tickID) {
                        clearInterval(obj.tickID);
                    }
                    delete obj.tickID;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                    return;
                }
                if (!obj.tickID && (!width || !height || perc)) {
                    obj.tickID = setInterval(function () {
                        var __start = new Date().getTime();
                        obj.onTick();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                    }, 200);
                }
                if (!width || !height) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                    return;
                }
                delete obj.wait;
                obj.oldWidth = width;
                obj.oldHeight = height;
                if (!chart) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                    return;
                }
                if (chart.width && (perc.indexOf('width') >= 0 && width !== oldWidth || wait.indexOf('width') >= 0)) {
                    chart.width(resize = width);
                }
                if (chart.height && (perc.indexOf('height') >= 0 && height !== oldHeight || wait.indexOf('height') >= 0)) {
                    chart.height(resize = height);
                }
                if (resize && obj.notify) {
                    chart[obj.notify]();
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            };
            obj.onTick();
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
    };
    $.ig.util.getEasingFunction = function (easingValue) {
        var __start = new Date().getTime();
        if (easingValue === null || easingValue == 'null' || easingValue == 'linear') {
            {
                var __ms = new Date().getTime() - __start;
                _putstat('', __ms);
            }
            return null;
        }
        switch (easingValue) {
        case 'cubic':
            return $.ig.EasingFunctions.prototype.cubicEase;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return easingValue;
    };
    $.ig.util.hasVerticalScroll = function (elem) {
        var __start = new Date().getTime();
        var overflow = $(elem).css('overflow-y');
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return overflow === 'scroll' || overflow === 'auto' && elem[0].scrollHeight > elem[0].clientHeight;
    };
    $.ig.util.hasHorizontalScroll = function (elem) {
        var __start = new Date().getTime();
        var overflow = $(elem).css('overflow-x');
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return overflow === 'scroll' || overflow === 'auto' && elem[0].scrollWidth > elem[0].clientWidth;
    };
    $.ig.util.getScrollWidth = function () {
        var __start = new Date().getTime();
        var el = $('<div style="width: 100px; height: 100px; position: absolute; top: -10000px; left: -10000px; overflow: scroll"></div>').appendTo($(document.body)), scrollWidth;
        scrollWidth = el[0].offsetWidth - el[0].clientWidth;
        el.remove();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return scrollWidth;
    };
    $.ig.util.getScrollHeight = function () {
        var __start = new Date().getTime();
        var el = $('<div style="width: 100px; height: 100px; position: absolute; top: -10000px; left: -10000px; overflow: scroll"></div>').appendTo($(document.body)), scrollWidth;
        scrollHeight = el[0].offsetHeight - el[0].clientHeight;
        el.remove();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return scrollHeight;
    };
    $.ig.util.isJsonpUrl = function (url) {
        var __start = new Date().getTime();
        var isJSONPExpr = /(=)\?(?=&|$)|\?\?/;
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return isJSONPExpr.test(url);
    };
    $.ig.util.evtButton = function (e) {
        var __start = new Date().getTime();
        e = e ? e.button : null;
        if (e === 1) {
            e = this._ie_8;
            if (!e) {
                var v;
                e = window.navigator.userAgent;
                if (e) {
                    v = e.toLowerCase().indexOf('msie ');
                    if (v > 0) {
                        v = parseFloat(e.substring(v + 5));
                        if (v > 8) {
                            v = parseFloat(document.documentMode);
                        }
                    }
                }
                this._ie_8 = e = v && !isNaN(v) && v > 5 && v < 9 ? 1 : -1;
            }
            e = e < 0 ? 1 : 0;
        }
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return e === 2 ? 2 : e ? 1 : 0;
    };
    $.fn.animateRotate = function (startAngle, endAngle, duration, easing, complete) {
        var __start = new Date().getTime();
        {
            var __ms = new Date().getTime() - __start;
            _putstat('', __ms);
        }
        return this.each(function () {
            var __start = new Date().getTime();
            var elem = $(this);
            $({ deg: startAngle }).animate({ deg: endAngle }, {
                duration: duration,
                easing: easing,
                step: function (now) {
                    var __start = new Date().getTime();
                    elem.css({
                        '-moz-transform': 'rotate(' + now + 'deg)',
                        '-webkit-transform': 'rotate(' + now + 'deg)',
                        '-o-transform': 'rotate(' + now + 'deg)',
                        '-ms-transform': 'rotate(' + now + 'deg)',
                        transform: 'rotate(' + now + 'deg)'
                    });
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('step', __ms);
                    }
                },
                complete: complete || $.noop
            });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
        });
    };
    if ($.Widget) {
        (function (createWidget) {
            var __start = new Date().getTime();
            $.Widget.prototype._createWidget = function (options, element) {
                var __start = new Date().getTime();
                var el = $(element || this.defaultElement || this)[0];
                if (el !== this) {
                    $.data(el, this.widgetName, this);
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return createWidget.apply(this, arguments);
            };
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
        }($.Widget.prototype._createWidget));
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    $.ig.DataSource = $.ig.DataSource || Class.extend({
        settings: {
            id: 'ds',
            outputResultsName: null,
            callback: null,
            callee: null,
            data: [],
            dataSource: null,
            dataBinding: null,
            dataBound: null,
            requestType: 'GET',
            type: 'unknown',
            schema: null,
            primaryKey: null,
            responseTotalRecCountKey: null,
            responseDataKey: null,
            responseDataType: null,
            responseContentType: null,
            localSchemaTransform: true,
            urlParamsEncoding: null,
            urlParamsEncoded: null,
            paging: {
                enabled: false,
                type: 'remote',
                pageSize: 5,
                pageSizeUrlKey: null,
                pageIndexUrlKey: null,
                pageIndex: 0,
                appendPage: false
            },
            filtering: {
                type: 'remote',
                caseSensitive: false,
                applyToAllData: true,
                customFunc: null,
                filterExprUrlKey: null,
                filterLogicUrlKey: 'filterLogic',
                defaultFields: [],
                expressions: [],
                exprString: ''
            },
            sorting: {
                defaultDirection: 'none',
                defaultFields: [],
                applyToAllData: true,
                customFunc: null,
                compareFunc: null,
                customConvertFunc: null,
                type: 'remote',
                caseSensitive: false,
                sortUrlKey: null,
                sortUrlAscValueKey: null,
                sortUrlDescValueKey: null,
                expressions: [],
                exprString: ''
            },
            summaries: {
                type: 'remote',
                summaryExprUrlKey: 'summaries',
                summariesResponseKey: 'summaries',
                summaryExecution: 'afterfilteringandpaging',
                columnSettings: []
            },
            fields: [],
            serializeTransactionLog: true,
            aggregateTransactions: false,
            autoCommit: false,
            updateUrl: null,
            rowAdded: null,
            rowUpdated: null,
            rowInserted: null,
            rowDeleted: null
        },
        init: function (options) {
            var __start = new Date().getTime();
            var tempSource, tempCallee, arrayAlready = false, metadata;
            if (options) {
                tempSource = options.dataSource;
                if (tempSource && ($.type(tempSource) === 'array' || $.type(tempSource) === 'object')) {
                    if ($.type(tempSource) === 'object' && options.responseDataKey && options.type !== 'json') {
                        metadata = tempSource.Metadata;
                        options.dataSource = $.ig.findPath(tempSource, options.responseDataKey);
                        if (metadata && options.dataSource.Metadata === undefined) {
                            options.dataSource.Metadata = metadata;
                        }
                        arrayAlready = true;
                    } else {
                        options.dataSource = null;
                    }
                }
                if (options.callee) {
                    tempCallee = options.callee;
                    options.callee = null;
                }
                this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
                if (arrayAlready) {
                    this.settings.type = 'array';
                } else if (tempSource && ($.type(tempSource) === 'array' || $.type(tempSource) === 'object')) {
                    options.dataSource = tempSource;
                    this.settings.dataSource = tempSource;
                }
                if (tempCallee) {
                    this.settings.callee = tempCallee;
                    tempCallee = null;
                }
            }
            this.settings.paging.pageIndex = 0;
            this._isBound = false;
            this._url = null;
            this._dsCallback = null;
            this._data = [];
            this._dataView = [];
            if (this.settings.type === 'unknown') {
                this._runtimeType = this.analyzeDataSource();
            } else {
                this._runtimeType = this.settings.type;
            }
            this._parser = new $.ig.TypeParser();
            this._schema = null;
            this._isSortingReq = false;
            this._isFilteringReq = false;
            this._isPagingReq = false;
            this._isSummariesReq = false;
            this._dataSummaries = [];
            this._recCount = 0;
            this._hasCount = false;
            this._initSchema();
            this._filteredDataView = [];
            this._transactionLog = [];
            this._accumulatedTransactionLog = [];
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        },
        _initSchema: function () {
            var __start = new Date().getTime();
            if (this.settings.schema) {
                if (this.settings.schema instanceof $.ig.DataSchema) {
                    this._schema = this.settings.schema;
                } else {
                    if (this.settings.type !== 'unknown') {
                        this._schema = new $.ig.DataSchema(this.settings.type, this.settings.schema);
                    } else {
                        this._schema = new $.ig.DataSchema(this._runtimeType, this.settings.schema);
                    }
                    this._schema._pk = this.settings.primaryKey;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_initSchema', __ms);
            }
        },
        fields: function (fields) {
            var __start = new Date().getTime();
            if (fields === undefined || fields === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('fields', __ms);
                }
                return this.settings.fields;
            }
            this.settings.fields = fields;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('fields', __ms);
            }
            return this;
        },
        analyzeDataSource: function () {
            var __start = new Date().getTime();
            var ds = this.dataSource(), dc;
            if (ds === undefined || ds === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('analyzeDataSource', __ms);
                }
                return 'empty';
            }
            if ($.type(ds) === 'function') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('analyzeDataSource', __ms);
                }
                return 'function';
            }
            if ($.type(ds) === 'array') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('analyzeDataSource', __ms);
                }
                return 'array';
            }
            if ($.type(ds) === 'number' || $.type(ds) === 'boolean' || $.type(ds) === 'date') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('analyzeDataSource', __ms);
                }
                return 'invalid';
            }
            if ($.type(ds) === 'string') {
                ds = $.trim(ds);
                if (ds.startsWith('/')) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('analyzeDataSource', __ms);
                    }
                    return 'remoteUrl';
                }
                if ($('#' + this.settings.id).length > 0 && ds.toLowerCase().startsWith('<table')) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('analyzeDataSource', __ms);
                    }
                    return 'htmlTableString';
                }
                if (ds.toLowerCase().startsWith('<table')) {
                    dc = '<div id=\'' + this.settings.id + '\' style=\'display:none;visibility:hidden;\'>' + ds + '</div>';
                    $(dc).appendTo($('body'));
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('analyzeDataSource', __ms);
                    }
                    return 'htmlTableString';
                }
                if (!ds.startsWith('[') && !ds.startsWith('{') && !ds.startsWith('<')) {
                    if (!ds.startsWith('http://') && !ds.startsWith('https://') && $('#' + ds).length > 0 && $('#' + ds)[0].nodeName.toLowerCase() === 'table') {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('analyzeDataSource', __ms);
                        }
                        return 'htmlTableId';
                    }
                    this._url = ds;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('analyzeDataSource', __ms);
                    }
                    return 'remoteUrl';
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('analyzeDataSource', __ms);
                }
                return 'unknown';
            }
            if (ds.nodeName && ds.nodeName.toLowerCase() === 'table') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('analyzeDataSource', __ms);
                }
                return 'htmlTableDom';
            }
            if (ds.nodeName && (ds.nodeName.toLowerCase() === 'ul' || ds.nodeName.toLowerCase() === 'ol')) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('analyzeDataSource', __ms);
                }
                return 'htmlListDom';
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('analyzeDataSource', __ms);
            }
            return 'unknown';
        },
        dataView: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('dataView', __ms);
            }
            return this._dataView;
        },
        data: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('data', __ms);
            }
            return this._data;
        },
        transformedData: function (transformedExecution) {
            var __start = new Date().getTime();
            switch (transformedExecution) {
            case 'priortofilteringandpaging':
                this._transformedData = this._data;
                break;
            case 'afterfilteringbeforepaging':
                break;
            case 'afterfilteringandpaging':
                this._transformedData = this.dataView();
                break;
            default:
                this._transformedData = this._dataView;
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('transformedData', __ms);
            }
            return this._transformedData;
        },
        dataSummaries: function () {
            var __start = new Date().getTime();
            var s = this.settings.summaries, type = s.type;
            if (type === 'local') {
                this._dataSummaries = this.transformedData(s.summaryExecution);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('dataSummaries', __ms);
            }
            return this._dataSummaries;
        },
        schema: function (s, t) {
            var __start = new Date().getTime();
            if (s === undefined || s === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('schema', __ms);
                }
                return this._schema;
            }
            if (s instanceof $.ig.DataSchema) {
                this._schema = s;
            } else {
                if (t === null || t === undefined) {
                    this._schema = new $.ig.DataSchema(s.type, s);
                } else {
                    this._schema = new $.ig.DataSchema(t, s);
                }
                this._schema._pk = this.settings.primaryKey;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('schema', __ms);
            }
            return this;
        },
        pagingSettings: function (p) {
            var __start = new Date().getTime();
            if (p === undefined || p === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('pagingSettings', __ms);
                }
                return this.settings.paging;
            }
            this.settings.paging = p;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('pagingSettings', __ms);
            }
            return this;
        },
        filterSettings: function (f) {
            var __start = new Date().getTime();
            if (f === undefined || f === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('filterSettings', __ms);
                }
                return this.settings.filtering;
            }
            this.settings.filtering = f;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('filterSettings', __ms);
            }
            return this;
        },
        sortSettings: function (s) {
            var __start = new Date().getTime();
            if (s === undefined || s === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('sortSettings', __ms);
                }
                return this.settings.sorting;
            }
            this.settings.sorting = s;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('sortSettings', __ms);
            }
            return this;
        },
        summariesSettings: function (s) {
            var __start = new Date().getTime();
            if (s === undefined || s === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('summariesSettings', __ms);
                }
                return this.settings.summaries;
            }
            this.settings.summaries = s;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('summariesSettings', __ms);
            }
            return this;
        },
        dataSource: function (ds) {
            var __start = new Date().getTime();
            if (ds === undefined || ds === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('dataSource', __ms);
                }
                return this.settings.dataSource;
            }
            this.settings.dataSource = ds;
            this.analyzeDataSource();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('dataSource', __ms);
            }
            return this;
        },
        type: function (t) {
            var __start = new Date().getTime();
            if (t === undefined || t === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('type', __ms);
                }
                return this._runtimeType;
            }
            this.settings.type = t;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('type', __ms);
            }
            return this;
        },
        findRecordByKey: function (key, ds) {
            var __start = new Date().getTime();
            var i;
            if (!ds) {
                for (i = 0; i < this._data.length; i++) {
                    if (this._data[i][this.settings.primaryKey] === key) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('findRecordByKey', __ms);
                        }
                        return this._data[i];
                    }
                }
            } else {
                for (i = 0; i < ds.length; i++) {
                    if (ds[i][this.settings.primaryKey] === key) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('findRecordByKey', __ms);
                        }
                        return ds[i];
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('findRecordByKey', __ms);
            }
            return null;
        },
        removeRecordByKey: function (key, origDs) {
            var __start = new Date().getTime();
            var i, len, data, count = 0, all = [
                    this._data,
                    this._dataView,
                    this._filteredData,
                    origDs
                ], prime = this.settings.primaryKey;
            while (count < 4) {
                data = all[count++];
                len = data ? data.length : 0;
                for (i = 0; i < len; i++) {
                    if (data[i] && data[i][prime] === key) {
                        $.ig.removeFromArray(data, i);
                        break;
                    }
                }
                if (data === all[count]) {
                    count++;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('removeRecordByKey', __ms);
            }
        },
        removeRecordByIndex: function (index, origDs) {
            var __start = new Date().getTime();
            var i, len, record, data = this._data, view = this._dataView, filter = this._filteredData;
            if (!data || isNaN(index) || index < 0 || index >= data.length) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('removeRecordByIndex', __ms);
                }
                return;
            }
            record = data[index];
            $.ig.removeFromArray(data, index);
            if (origDs) {
                $.ig.removeFromArray(origDs, index);
            }
            data = data === view ? filter : view;
            while (record) {
                len = data ? data.length : 0;
                for (i = 0; i < len; i++) {
                    if (data[i] === record) {
                        $.ig.removeFromArray(data, i);
                        break;
                    }
                }
                if (data === filter) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('removeRecordByIndex', __ms);
                    }
                    return;
                }
                data = filter;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('removeRecordByIndex', __ms);
            }
        },
        setCellValue: function (rowId, colId, val, autoCommit) {
            var __start = new Date().getTime();
            var t = this._createCellTransaction(rowId, colId, val);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('setCellValue', __ms);
            }
            return t;
        },
        updateRow: function (rowId, rowObject, autoCommit) {
            var __start = new Date().getTime();
            var t = this._createRowTransaction(rowId, rowObject), oldRow = this.settings.primaryKey === null ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = this.settings.primaryKey === null ? rowId : $.ig.indexInArray(this._data, oldRow);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId);
            }
            if ($.type(this.settings.rowUpdated) === 'function') {
                if (this.settings.callee) {
                    this.settings.rowUpdated.apply(this.settings.callee, [
                        {
                            rowIndex: rowIndex,
                            newRow: rowObject,
                            oldRow: oldRow
                        },
                        this
                    ]);
                } else {
                    this.settings.rowUpdated({
                        rowIndex: rowIndex,
                        newRow: rowObject,
                        oldRow: oldRow
                    }, this);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('updateRow', __ms);
            }
            return t;
        },
        addRow: function (rowId, rowObject, autoCommit) {
            var __start = new Date().getTime();
            var t = this._createNewRowTransaction(rowId, rowObject);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId);
            }
            if ($.type(this.settings.rowAdded) === 'function') {
                if (this.settings.callee) {
                    this.settings.rowAdded.apply(this.settings.callee, [
                        {
                            rowId: rowId,
                            row: rowObject
                        },
                        this
                    ]);
                } else {
                    this.settings.rowAdded({
                        rowId: rowId,
                        row: rowObject
                    }, this);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('addRow', __ms);
            }
            return t;
        },
        insertRow: function (rowId, rowObject, rowIndex, autoCommit) {
            var __start = new Date().getTime();
            var t = this._createInsertRowTransaction(rowId, rowObject, rowIndex);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId);
            }
            if ($.type(this.settings.rowInserted) === 'function') {
                if (this.settings.callee) {
                    this.settings.rowInserted.apply(this.settings.callee, [
                        {
                            rowId: rowId,
                            row: rowObject,
                            rowIndex: rowIndex
                        },
                        this
                    ]);
                } else {
                    this.settings.rowInserted({
                        rowId: rowId,
                        row: rowObject,
                        rowIndex: rowIndex
                    }, this);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('insertRow', __ms);
            }
            return t;
        },
        deleteRow: function (rowId, autoCommit) {
            var __start = new Date().getTime();
            var t = this._createDeleteRowTransaction(rowId), row = this.settings.primaryKey === null ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = this.settings.primaryKey === null ? rowId : $.ig.indexInArray(this._data, row), isNewRow = false, i, j;
            for (i = 0; this.settings.aggregateTransactions && i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].type === 'newrow' && this._transactionLog[i].rowId === rowId) {
                    isNewRow = true;
                    rowId = this._transactionLog[i].rowId;
                    this._removeTransactionByTransactionId(this._transactionLog[i].tid);
                    for (j = 0; j < this._accumulatedTransactionLog.length; j++) {
                        if (this._accumulatedTransactionLog[j].rowId === rowId) {
                            $.ig.removeFromArray(this._accumulatedTransactionLog, j);
                        }
                    }
                    break;
                }
            }
            if (!(this.settings.aggregateTransactions && isNewRow)) {
                this._addTransaction(t);
                if (autoCommit === true) {
                    this.commit(rowId);
                }
                if ($.type(this.settings.rowDeleted) === 'function') {
                    if (this.settings.callee) {
                        this.settings.rowDeleted.apply(this.settings.callee, [
                            {
                                rowId: rowId,
                                row: row,
                                rowIndex: rowIndex
                            },
                            this
                        ]);
                    } else {
                        this.settings.rowDeleted({
                            rowId: rowId,
                            row: row,
                            rowIndex: rowIndex
                        }, this);
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('deleteRow', __ms);
            }
        },
        addNode: function (data) {
            var __start = new Date().getTime();
            var t = this._createAddNodeTransaction(data);
            this._addTransaction(t);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('addNode', __ms);
            }
        },
        removeNode: function (data) {
            var __start = new Date().getTime();
            var t = this._createRemoveNodeTransaction(data);
            this._addTransaction(t);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('removeNode', __ms);
            }
        },
        getDetachedRecord: function (t) {
            var __start = new Date().getTime();
            var o = $.type(this._data[0]) === 'array' ? [] : {}, i, originalRec;
            if (this.settings.primaryKey === null) {
                originalRec = this._data[parseInt(t.rowId, 10)];
            } else {
                originalRec = this.findRecordByKey(t.rowId);
            }
            if (this._data[0] !== 'array') {
                for (i in originalRec) {
                    if (originalRec.hasOwnProperty(i)) {
                        o[i] = originalRec[i];
                    }
                }
            } else {
                for (i = 0; i < originalRec.length; i++) {
                    o[i] = originalRec[i];
                }
            }
            if (t.type === 'cell') {
                o[t.col] = t.value;
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getDetachedRecord', __ms);
                }
                return o;
            }
            if (o !== 'array') {
                for (i in t.row) {
                    if (t.row.hasOwnProperty(i)) {
                        o[i] = t.row[i];
                    }
                }
            } else {
                for (i = 0; i < t.row.length; i++) {
                    o[i] = t.row[i];
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getDetachedRecord', __ms);
            }
            return o;
        },
        commit: function (id) {
            var __start = new Date().getTime();
            if (id !== null && id !== undefined) {
                this._commitTransactionsByRowId(id);
            } else {
                this._transactionLog.reverse();
                while (this._transactionLog.length > 0) {
                    this._commitTransaction(this._transactionLog.pop());
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('commit', __ms);
            }
        },
        rollback: function (id) {
            var __start = new Date().getTime();
            var i;
            if (id !== null && id !== undefined) {
                this._rollbackTransactionsByRowId(id);
            } else {
                i = this._transactionLog.length;
                while (i-- > 0) {
                    this._rollbackTransaction(this._transactionLog[i]);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('rollback', __ms);
            }
        },
        pendingTransactions: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('pendingTransactions', __ms);
            }
            return this._transactionLog;
        },
        allTransactions: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('allTransactions', __ms);
            }
            return this._accumulatedTransactionLog;
        },
        _createCellTransaction: function (rowId, colId, val) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createCellTransaction', __ms);
            }
            return {
                type: 'cell',
                rowId: rowId,
                tid: this._generateTransactionId(),
                col: colId,
                value: val
            };
        },
        _createRowTransaction: function (rowId, rowObject) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createRowTransaction', __ms);
            }
            return {
                type: 'row',
                tid: this._generateTransactionId(),
                row: rowObject,
                rowId: rowId
            };
        },
        _createNewRowTransaction: function (rowId, rowObject) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createNewRowTransaction', __ms);
            }
            return {
                type: 'newrow',
                tid: this._generateTransactionId(),
                row: rowObject,
                rowId: rowId
            };
        },
        _createInsertRowTransaction: function (rowId, rowObject, rowIndex) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createInsertRowTransaction', __ms);
            }
            return {
                type: 'insertrow',
                tid: this._generateTransactionId(),
                row: rowObject,
                rowId: rowId,
                rowIndex: rowIndex
            };
        },
        _createDeleteRowTransaction: function (rowId) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createDeleteRowTransaction', __ms);
            }
            return {
                type: 'deleterow',
                tid: this._generateTransactionId(),
                rowId: rowId
            };
        },
        _createAddNodeTransaction: function (data) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createAddNodeTransaction', __ms);
            }
            return {
                type: 'addnode',
                tid: this._generateTransactionId(),
                tdata: data
            };
        },
        _createRemoveNodeTransaction: function (data) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createRemoveNodeTransaction', __ms);
            }
            return {
                type: 'removenode',
                tid: this._generateTransactionId(),
                tdata: data
            };
        },
        _addTransaction: function (t) {
            var __start = new Date().getTime();
            var exists = false, i = 0, prop, globalt, j, dirty = true, k;
            if (t.type === 'cell') {
                for (i = 0; i < this._transactionLog.length; i++) {
                    if (this._transactionLog[i].rowId === t.rowId && this._transactionLog[i].col === t.col) {
                        exists = true;
                        if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
                            for (j = 0; j < this.dataView().length; j++) {
                                if (this.dataView()[j][this.settings.primaryKey] === t.rowId && this.dataView()[j][t.col] === t.value) {
                                    for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
                                        if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
                                            $.ig.removeFromArray(this._accumulatedTransactionLog, k);
                                        }
                                    }
                                    this._removeTransactionByTransactionId(this._transactionLog[i].tid);
                                    dirty = false;
                                }
                            }
                        }
                        if (dirty) {
                            this._transactionLog[i].value = t.value;
                            this._syncGlobalTransaction(this._transactionLog[i]);
                        }
                    }
                }
                for (j = 0; j < this._transactionLog.length; j++) {
                    if (this._transactionLog[j].type === 'newrow' && this._transactionLog[j].rowId === t.rowId) {
                        if (t.type === 'row') {
                            this._transactionLog[j].value = t.value;
                        } else {
                            this._transactionLog[j].row[t.col] = t.value;
                        }
                        this._syncGlobalTransaction(this._transactionLog[j]);
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('_addTransaction', __ms);
                        }
                        return;
                    }
                }
            } else if (t.type === 'row') {
                for (i = 0; i < this._transactionLog.length; i++) {
                    if (this._transactionLog[i].rowId === t.rowId && this._transactionLog[i].type !== 'cell') {
                        exists = true;
                        if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
                            dirty = false;
                            for (j = 0; j < this.dataView().length; j++) {
                                if (this.dataView()[j][this.settings.primaryKey] === t.rowId) {
                                    for (prop in t.row) {
                                        if (t.row.hasOwnProperty(prop) && t.row[prop] !== this.dataView()[j][prop]) {
                                            dirty = true;
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }
                            for (j = 0, !dirty; j < this._transactionLog.length; j++) {
                                if (this._transactionLog[j].type === 'newrow' && this._transactionLog[j].rowId === t.rowId) {
                                    this._transactionLog[j].row = t.row;
                                    this._syncGlobalTransaction(this._transactionLog[j]);
                                    {
                                        var __ms = new Date().getTime() - __start;
                                        _putstat('_addTransaction', __ms);
                                    }
                                    return;
                                }
                            }
                        }
                        if (dirty) {
                            this._transactionLog[i].row = t.row;
                            this._syncGlobalTransaction(this._transactionLog[i]);
                        } else {
                            for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
                                if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
                                    $.ig.removeFromArray(this._accumulatedTransactionLog, k);
                                }
                            }
                            this._removeTransactionByTransactionId(this._transactionLog[i].tid);
                        }
                    }
                }
            } else if (t.type === 'addnode' || t.type === 'removenode') {
                this._transactionLog.push(t);
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_addTransaction', __ms);
                }
                return;
            }
            if (!exists) {
                this._transactionLog.push(t);
                globalt = $.extend(true, {}, t);
                if (globalt.type === 'cell' && $.type(globalt.value) === 'date') {
                    globalt.value = '/Date(' + globalt.value.getTime() + ')/';
                } else if (globalt.type === 'row' || globalt.type === 'insertrow' || globalt.type === 'newrow') {
                    for (prop in globalt.row) {
                        if (globalt.row.hasOwnProperty(prop) && $.type(globalt.row[prop]) === 'date') {
                            globalt.row[prop] = '/Date(' + globalt.row[prop].getTime() + ')/';
                        }
                    }
                }
                this._accumulatedTransactionLog.push(globalt);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_addTransaction', __ms);
            }
        },
        _syncGlobalTransaction: function (t) {
            var __start = new Date().getTime();
            var i, prop;
            if (!t) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_syncGlobalTransaction', __ms);
                }
                return;
            }
            if (t.type === 'cell') {
                for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                    if (this._accumulatedTransactionLog[i].rowId === t.rowId) {
                        if ($.type(t.value) === 'date') {
                            this._accumulatedTransactionLog[i].value = '/Date(' + t.value.getTime() + ')/';
                        } else {
                            this._accumulatedTransactionLog[i].value = t.value;
                        }
                        break;
                    }
                }
            } else if (t.type === 'row' || t.type === 'insertrow' || t.type === 'newrow') {
                for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                    if (this._accumulatedTransactionLog[i].rowId === t.rowId && this._accumulatedTransactionLog[i].type !== 'cell') {
                        for (prop in t.row) {
                            if (t.row.hasOwnProperty(prop)) {
                                if ($.type(t.row[prop]) === 'date') {
                                    this._accumulatedTransactionLog[i].row[prop] = '/Date(' + t.row[prop].getTime() + ')/';
                                } else {
                                    this._accumulatedTransactionLog[i].row[prop] = t.row[prop];
                                }
                            }
                        }
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_syncGlobalTransaction', __ms);
            }
        },
        _removeTransactionByTransactionId: function (tid, removeFromAll) {
            var __start = new Date().getTime();
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].tid === tid) {
                    $.ig.removeFromArray(this._transactionLog, i);
                    break;
                }
            }
            if (removeFromAll === true) {
                for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                    if (this._accumulatedTransactionLog[i].tid === tid) {
                        $.ig.removeFromArray(this._accumulatedTransactionLog, i);
                        break;
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_removeTransactionByTransactionId', __ms);
            }
        },
        _removeTransactionsByRecordId: function (id) {
            var __start = new Date().getTime();
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].rowId === id) {
                    $.ig.removeFromArray(this._transactionLog, i);
                    break;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_removeTransactionsByRecordId', __ms);
            }
        },
        _addRow: function (row, index, origDs) {
            var __start = new Date().getTime();
            var data, key, count = 0, schema = this.settings.schema, layouts = schema ? schema.layouts : null, lo, all = [
                    this._data,
                    this._dataView,
                    origDs
                ];
            if (layouts) {
                for (key in layouts) {
                    if ((key.match(/\//g) || []).length !== 1) {
                        continue;
                    }
                    if (layouts.hasOwnProperty(key) && layouts[key].key && !row.hasOwnProperty(layouts[key].key)) {
                        if (layouts[key].responseDataKey) {
                            lo = {};
                            lo[layouts[key].responseDataKey] = [];
                        } else {
                            lo = [];
                        }
                        row[layouts[key].key] = lo;
                    }
                }
            }
            while (count < 4) {
                data = all[count++];
                if (data) {
                    if (index >= 0 && index < data.length) {
                        data.splice(index, 0, row);
                    } else {
                        data.push(row);
                    }
                }
                if (data === all[count]) {
                    count++;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_addRow', __ms);
            }
        },
        _commitTransaction: function (t) {
            var __start = new Date().getTime();
            var i, prop, rec, origRec, origDs = this.settings.localSchemaTransform ? this._origDs : null;
            if (origDs === this._data) {
                origDs = null;
            }
            if (this.settings.primaryKey === null) {
                rec = this._data[parseInt(t.rowId, 10)];
                if (origDs) {
                    origRec = origDs[parseInt(t.rowId, 10)];
                }
            } else {
                rec = this.findRecordByKey(t.rowId);
                if (origDs) {
                    origRec = this.findRecordByKey(t.rowId, origDs);
                }
            }
            if (t.type === 'cell') {
                rec[t.col] = t.value;
                if (origRec) {
                    origRec[t.col] = t.value;
                }
            } else if (t.type === 'row') {
                if ($.type(t.row) === 'array') {
                    for (i = 0; i < t.row.length; i++) {
                        rec[i] = t.row[i];
                        if (origRec) {
                            origRec[i] = t.row[i];
                        }
                    }
                } else {
                    for (prop in t.row) {
                        if (t.row.hasOwnProperty(prop)) {
                            rec[prop] = t.row[prop];
                            if (origRec) {
                                origRec[prop] = t.row[prop];
                            }
                        }
                    }
                }
            } else if (t.type === 'deleterow') {
                if (this.settings.primaryKey === null) {
                    this.removeRecordByIndex(parseInt(t.rowId, 10), origDs);
                } else {
                    this.removeRecordByKey(t.rowId, origDs);
                }
            } else if (t.type === 'newrow') {
                this._addRow(t.row, -1, origDs);
            } else if (t.type === 'insertrow') {
                this._addRow(t.row, t.rowIndex, origDs);
            }
            this._removeTransactionByTransactionId(t.tid);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_commitTransaction', __ms);
            }
        },
        _rollbackTransaction: function (t) {
            var __start = new Date().getTime();
            this._removeTransactionByTransactionId(t.tid, true);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_rollbackTransaction', __ms);
            }
        },
        _commitTransactionsByRowId: function (id) {
            var __start = new Date().getTime();
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].rowId === id) {
                    this._commitTransaction(this._transactionLog[i]);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_commitTransactionsByRowId', __ms);
            }
        },
        _rollbackTransactionsByRowId: function (id) {
            var __start = new Date().getTime();
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].rowId === id) {
                    this._rollbackTransaction(this._transactionLog[i]);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_rollbackTransactionsByRowId', __ms);
            }
        },
        transactionsAsString: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('transactionsAsString', __ms);
            }
            return JSON.stringify(this._accumulatedTransactionLog);
        },
        _generateTransactionId: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_generateTransactionId', __ms);
            }
            return ((1 + Math.random()) * parseInt('10000', 16)).toString(16).substring(1, 5);
        },
        saveChanges: function (success, error) {
            var __start = new Date().getTime();
            if (this.settings.updateUrl !== null) {
                var me = this, opts;
                opts = {
                    type: 'POST',
                    url: this.settings.updateUrl,
                    data: { ig_transactions: JSON.stringify(this._accumulatedTransactionLog) },
                    success: function (data, textStatus, jqXHR) {
                        var __start = new Date().getTime();
                        me._saveChangesSuccess(data, textStatus, jqXHR);
                        if (success) {
                            success(data, textStatus, jqXHR);
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('success', __ms);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        var __start = new Date().getTime();
                        me._saveChangesError(jqXHR, textStatus, errorThrown);
                        if (error) {
                            error(jqXHR, textStatus, errorThrown);
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('error', __ms);
                        }
                    }
                };
                $.ajax(opts);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('saveChanges', __ms);
            }
        },
        _saveChangesSuccess: function (data, textStatus, jqXHR) {
            var __start = new Date().getTime();
            if (data.Success) {
                this.commit();
                this._transactionLog = [];
                this._accumulatedTransactionLog = [];
            }
            var schs = this._saveChangesHandlers, i = schs ? schs.length : 0;
            while (i-- > 0) {
                schs[i](data, textStatus, jqXHR);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_saveChangesSuccess', __ms);
            }
        },
        _saveChangesError: function (jqXHR, textStatus, errorThrown) {
            var __start = new Date().getTime();
            var sche = this._saveChangesErrorHandlers, i = sche ? sche.length : 0;
            while (i-- > 0) {
                sche[i](jqXHR, textStatus, errorThrown);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_saveChangesError', __ms);
            }
        },
        _addChangesSuccessHandler: function (functionDelegate) {
            var __start = new Date().getTime();
            if (this._saveChangesHandlers === undefined) {
                this._saveChangesHandlers = [];
            }
            this._saveChangesHandlers[this._saveChangesHandlers.length] = functionDelegate;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_addChangesSuccessHandler', __ms);
            }
        },
        _removeChangesSuccessHandler: function (functionDelegate) {
            var __start = new Date().getTime();
            if (this._saveChangesHandlers !== undefined) {
                var index = $.ig.indexInArray(this._saveChangesHandlers, functionDelegate);
                if (index > -1) {
                    this._saveChangesHandlers = this._saveChangesHandlers.slice(0, index).concat(this._saveChangesHandlers.slice(index + 1, this._saveChangesHandlers.length));
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_removeChangesSuccessHandler', __ms);
            }
        },
        _addChangesErrorHandler: function (functionDelegate) {
            var __start = new Date().getTime();
            if (this._saveChangesErrorHandlers === undefined) {
                this._saveChangesErrorHandlers = [];
            }
            this._saveChangesErrorHandlers[this._saveChangesErrorHandlers.length] = functionDelegate;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_addChangesErrorHandler', __ms);
            }
        },
        _removeChangesErrorHandler: function (functionDelegate) {
            var __start = new Date().getTime();
            if (this._saveChangesErrorHandlers !== undefined) {
                var index = $.ig.indexInArray(this._saveChangesErrorHandlers, functionDelegate);
                if (index > -1) {
                    this._saveChangesErrorHandlers = this._saveChangesErrorHandlers.slice(0, index).concat(this._saveChangesErrorHandlers.slice(index + 1, this._saveChangesErrorHandlers.length));
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_removeChangesErrorHandler', __ms);
            }
        },
        dataBind: function (callback, callee) {
            var __start = new Date().getTime();
            var table, tableObj, dsObj, ds, s, p = this.settings, args, resKey, noCancel = true;
            this._transactionLog = [];
            this._accumulatedTransactionLog = [];
            if (!callback) {
                callback = p.callback;
            }
            args = { cancel: false };
            if ($.isFunction(p.dataBinding)) {
                noCancel = p.dataBinding(this, args);
                if (noCancel === undefined) {
                    noCancel = true;
                }
            }
            if (noCancel) {
                if (this.settings.type === 'unknown' && (this._runtimeType === null || this._runtimeType === undefined)) {
                    this._runtimeType = this.analyzeDataSource();
                } else if (this._runtimeType == 'json') {
                    ds = this.dataSource();
                    if ($.type(ds) === 'string') {
                        ds = $.trim(ds);
                        if (ds.startsWith('/') || ds.startsWith('http://') || ds.startsWith('https://')) {
                            this._runtimeType = 'remoteUrl';
                        }
                    }
                }
                switch (this._runtimeType) {
                case 'function':
                    this._data = p.dataSource();
                    if (this.schema()) {
                        this._data = this.schema().transform(this._data);
                    }
                    break;
                case 'array':
                    if (this.schema() && this.settings.localSchemaTransform) {
                        this._data = this.schema().transform(this.dataSource());
                        if (this.dataSource().Metadata) {
                            this._metadata = this.dataSource().Metadata;
                            this.summariesResponse(this.settings.summaries.summariesResponseKey, this.dataSource());
                        }
                        this._origDs = this.dataSource();
                    } else {
                        this._data = this.dataSource();
                    }
                    break;
                case 'htmlTableDom':
                case 'htmlTableId':
                case 'htmlTableString':
                    if (this._tableBound) {
                        break;
                    }
                    this._runtimeType = this.analyzeDataSource();
                    if (this._runtimeType === 'htmlTableId') {
                        tableObj = $('#' + this.dataSource());
                        table = this._validateTable(tableObj);
                    } else if (this._runtimeType === 'htmlTableString') {
                        tableObj = $('#' + this.settings.id + ' > table');
                        table = this._validateTable(tableObj);
                    } else {
                        table = this.dataSource();
                    }
                    if (this.schema() && this.settings.localSchemaTransform) {
                        this._data = this.schema().transform(table);
                    } else {
                        this._data = this.tableToObject(table);
                    }
                    this._tableBound = true;
                    break;
                case 'htmlListDom':
                    this._data = this.schema().transform(this.dataSource());
                    break;
                case 'invalid':
                    throw new Error($.ig.DataSourceLocale.locale.invalidDataSource);
                case 'unknown':
                case 'json':
                case 'xml':
                    if (this.settings.type !== 'json' && p.type !== 'xml') {
                        throw new Error($.ig.DataSourceLocale.locale.unknownDataSource);
                    } else {
                        resKey = this.settings.responseDataKey;
                        if ($.type(this.dataSource()) === 'string') {
                            if (p.type === 'json') {
                                dsObj = this.stringToJSONObject(this.dataSource());
                            } else {
                                dsObj = this.stringToXmlObject(this.dataSource());
                            }
                        } else {
                            dsObj = this.dataSource();
                        }
                        if (this.schema() && this.settings.localSchemaTransform === true) {
                            this._data = this.schema().transform(dsObj);
                            if (resKey !== null && resKey !== undefined) {
                                this._origDs = $.ig.findPath(dsObj, resKey);
                            } else {
                                this._origDs = dsObj;
                            }
                        } else if ((!this.schema() || this.settings.localSchemaTransform === false) && p.type === 'json') {
                            if (resKey !== null && resKey !== undefined) {
                                this._data = this._origDs = $.ig.findPath(dsObj, resKey);
                            } else {
                                this._data = dsObj;
                            }
                            this._origDs = dsObj;
                        } else if (!this.schema() && p.type === 'xml') {
                            throw new Error($.ig.DataSourceLocale.locale.errorXmlSourceWithoutSchema);
                        }
                        this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, dsObj, this);
                        if (dsObj.Metadata) {
                            this._metadata = dsObj.Metadata;
                        }
                        this.summariesResponse(this.settings.summaries.summariesResponseKey, dsObj);
                    }
                    break;
                case 'remoteUrl':
                    this._remoteData(callback, callee);
                    break;
                case 'empty':
                    this._data = [];
                    this._dataView = [];
                    this._dataSummaries = [];
                    break;
                default:
                    break;
                }
                this._dataView = this._data;
                this._filter = false;
                s = p.sorting;
                if (s.type === 'local' && this._runtimeType !== 'remoteUrl' && s.defaultFields.length > 0) {
                    this.sort(s.defaultFields, s.defaultDirection, false);
                }
                f = p.filtering;
                if (f.type === 'local' && this._runtimeType !== 'remoteUrl' && f.defaultFields.length > 0) {
                    this.filter(f.defaultFields);
                }
                if (p.paging.enabled && p.paging.type === 'local' && this._runtimeType !== 'remoteUrl') {
                    this._page();
                }
                this._populateTransformedData();
                if (this._runtimeType !== 'remoteUrl') {
                    this._invokeCallback(callee, callback);
                }
                if ($.isFunction(p.dataBound) && !args.cancel) {
                    p.dataBound(this);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('dataBind', __ms);
            }
            return this;
        },
        summariesResponse: function (key, dsObj) {
            var __start = new Date().getTime();
            var rec, resPath, i, schema, func, offsets, offset, obj;
            if (key !== null && key !== '') {
                rec = dsObj;
                resPath = key.split('.');
                if (key.length > 0) {
                    for (i = 0; i < resPath.length; i++) {
                        if (rec === null || rec === undefined) {
                            break;
                        }
                        rec = rec[resPath[i]];
                    }
                    this._dataSummaries = rec;
                } else {
                    this._dataSummaries = dsObj;
                }
                if (this._dataSummaries === undefined || this._dataSummaries === null) {
                    this._dataSummaries = [];
                }
                if (this.settings.localSchemaTransform === true && this.schema() && dsObj && dsObj.Metadata && dsObj.Metadata.timezoneOffsetsSummaries) {
                    offsets = dsObj.Metadata.timezoneOffsetsSummaries;
                    this._dataSummaries._serverOffsetsSummaries = offsets;
                    schema = this.schema().schema;
                    if (schema && schema.fields) {
                        for (i = 0; i < schema.fields.length; i++) {
                            if (schema.fields[i].type === 'date' && offsets[schema.fields[i].name] !== undefined) {
                                key = schema.fields[i].name;
                                for (func in offsets[key]) {
                                    offset = offsets[key][func];
                                    obj = this._dataSummaries[key][func];
                                    if ($.type(obj) === 'string' && obj.indexOf('/Date(') !== -1) {
                                        this._dataSummaries[key][func] = new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10) + offset);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('summariesResponse', __ms);
            }
        },
        _populateTransformedData: function (data) {
            var __start = new Date().getTime();
            if (data !== null && data !== undefined) {
                this._transformedData = data;
            } else {
                this._transformedData = this._data;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_populateTransformedData', __ms);
            }
        },
        _invokeCallback: function (callee, callback) {
            var __start = new Date().getTime();
            var cbResolved, calleeResolved;
            cbResolved = callback || this.settings.callback;
            calleeResolved = callee || this.settings.callee;
            if (cbResolved) {
                if (calleeResolved) {
                    cbResolved.apply(calleeResolved, [
                        true,
                        '',
                        this
                    ]);
                } else {
                    cbResolved(true, '', this);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_invokeCallback', __ms);
            }
        },
        _remoteData: function (callback, callee) {
            var __start = new Date().getTime();
            var params, url = this.settings.dataSource, dataType = this.settings.responseDataType, contentType = this.settings.responseContentType, options, verb = this.settings.requestType;
            params = this._encodeUrl();
            if (callback) {
                this._customCallback = callback;
            } else {
                this._customCallback = null;
            }
            this._callee = callee;
            options = {
                url: url,
                data: verb === 'GET' ? params : JSON.stringify(params),
                type: verb,
                dataType: dataType,
                async: true,
                context: this,
                contentType: contentType,
                cache: false,
                dataFilter: this._dataFilter,
                success: this._successCallback,
                complete: this._completeCallback,
                converters: {
                    'text json': function (value) {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('undefined', __ms);
                        }
                        return value;
                    }
                },
                error: this._errorCallback
            };
            this._processRequest(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_remoteData', __ms);
            }
        },
        _dataFilter: function (data, type) {
            var __start = new Date().getTime();
            var ds, schema = this.context.schema(), rawData, t = this.context.settings.type, ver, returnString = false;
            if (type === undefined || type === null) {
                if (typeof data === 'object' && data && typeof data.charAt !== 'function') {
                    if ($.isXMLDoc(data)) {
                        type = 'xml';
                    } else {
                        type = 'json';
                    }
                } else {
                    type = 'text';
                }
            }
            if (type === 'xml') {
                schema._type = 'xml';
                ds = this.context._processXmlResponse(data, true, this.context);
            } else if (type === 'json') {
                if (schema) {
                    schema._type = 'json';
                }
                if ($.type(data) === 'string') {
                    rawData = JSON.parse(data);
                } else {
                    rawData = data;
                }
                returnString = true;
                ds = this.context._processJsonResponse(rawData, this.context);
            } else {
                if (jQuery.fn.jquery) {
                    ver = jQuery.fn.jquery.split('.');
                }
                if (ver && ver.length >= 2) {
                    if (parseInt(ver[1], 10) > 4 || parseInt(ver[0], 10) > 1) {
                        this.dataTypes = [];
                        this.dataTypes.push('text');
                        returnString = true;
                    }
                }
                data = $.type(data) === 'string' ? $.trim(data) : data;
                if (data && $.type(data) === 'string' && (data.startsWith('<?xml') || data.startsWith('<')) || t === 'xml') {
                    if (schema) {
                        schema._type = 'xml';
                    }
                    ds = this.context._processXmlResponse(this.context.stringToXmlObject(data), false, this.context);
                } else if (data && $.type(data) === 'string' && data.startsWith('[') || t === 'json' || t === 'array') {
                    if (schema) {
                        schema._type = 'json';
                    }
                    ds = this.context._processJsonResponse(JSON.parse(data), this.context);
                } else if (data && $.type(data) === 'string' && data.startsWith('{') || t === 'json') {
                    if (schema) {
                        schema._type = 'json';
                    }
                    ds = this.context._processJsonResponse(JSON.parse(data), this.context);
                } else if ($.isXMLDoc(data)) {
                    if (schema) {
                        schema._type = 'xml';
                    }
                    ds = this.context._processXmlResponse(data, true, this.context);
                } else if (data !== '' && data !== null) {
                    throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedResponseType);
                }
            }
            if (returnString) {
                if (!(this.context.settings.paging && this.context.settings.paging.enabled && this.context.settings.paging.appendPage)) {
                    this.context._data = ds;
                }
                this.context._alreadySet = true;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_dataFilter', __ms);
            }
            return ds;
        },
        _successCallback: function (data) {
            var __start = new Date().getTime();
            var x, len = data ? data.length : 0;
            if ((data === undefined || data === null) && !this._alreadySet) {
                this._data = [];
                this._dataView = [];
            } else {
                if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
                    for (x = 0; x < len; ++x) {
                        this._data[this._data.length] = data[x];
                    }
                } else {
                    if (this._alreadySet) {
                        this._dataView = this._data;
                    } else {
                        this._data = data;
                        this._dataView = data;
                    }
                }
            }
            this._alreadySet = false;
            this._populateTransformedData();
            this._isPagingReq = false;
            this._isFilteringReq = false;
            this._isSortingReq = false;
            this._isSummariesReq = false;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_successCallback', __ms);
            }
        },
        _errorCallback: function (req, status, error) {
            var __start = new Date().getTime();
            var f = this._customCallback || this.settings.callback, errmsg, statusMsg;
            this._isPagingReq = false;
            this._isFilteringReq = false;
            this._isSortingReq = false;
            this._isSummariesReq = false;
            statusMsg = status === null ? ' ' : ' (' + status + ') ';
            errmsg = $.ig.DataSourceLocale.locale.errorRemoteRequest + statusMsg + (error !== undefined ? error.message : req && req.statusText ? req.statusText : '');
            if (f && this._callee) {
                f.apply(this._callee, [
                    false,
                    errmsg,
                    this
                ]);
            } else if (f) {
                f(false, errmsg, this);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_errorCallback', __ms);
            }
        },
        _completeCallback: function (req, status) {
            var __start = new Date().getTime();
            var f, callee, s = this.settings.sorting, p = this.settings.paging;
            if (s.type === 'local' && s.defaultFields.length > 0) {
                this.sort(s.defaultFields, s.defaultDirection, false);
            }
            if (p.enabled && p.type === 'local') {
                this._page();
            }
            f = this._customCallback || this.settings.callback;
            callee = this._callee || this.settings.callee;
            if (f && callee) {
                f.apply(callee, [
                    true,
                    '',
                    this
                ]);
            } else if (f) {
                f(true, '', this);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_completeCallback', __ms);
            }
        },
        _processRequest: function (options) {
            var __start = new Date().getTime();
            var o, s;
            if (this.settings.responseDataType === 'jsonp') {
                o = {
                    dataType: 'jsonp',
                    type: 'GET',
                    url: options.url,
                    data: options.data,
                    success: $.proxy(this._jsonpFilter, this)
                };
                s = this.settings;
                if (s.jsonp !== undefined && s.jsonp !== null) {
                    o.jsonp = this.settings.jsonp;
                }
                if (s.jsonpCallback !== undefined && s.jsonpCallback !== undefined) {
                    o.jsonpCallback = this.settings.jsonpCallback;
                }
                $.ajax(o);
            } else {
                $.ajax(options);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_processRequest', __ms);
            }
        },
        _jsonpFilter: function (data, type) {
            var __start = new Date().getTime();
            var resp, x;
            this.context = this;
            resp = this._dataFilter(data, 'json');
            if (!resp.length && $.type(resp) === 'object') {
                resp = [resp];
            }
            if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
                for (x = 0; x < resp.length; ++x) {
                    this._data[this._data.length] = resp[x];
                }
            } else {
                this._data = resp;
                this._dataView = resp;
            }
            this._populateTransformedData();
            this._completeCallback();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_jsonpFilter', __ms);
            }
        },
        _processJsonResponse: function (data, context) {
            var __start = new Date().getTime();
            var ds, schema = context.schema(), resKey, resPath, i;
            if (this._response_data) {
                this._response_data(data);
            }
            if (schema && schema.fields && schema.fields().length > 0 && this.settings.localSchemaTransform) {
                ds = schema.transform(data);
            } else {
                resKey = context.settings.responseDataKey;
                if (resKey !== null && resKey !== undefined) {
                    resPath = resKey.split('.');
                    if (resPath.length > 0) {
                        ds = data;
                        for (i = 0; i < resPath.length; i++) {
                            ds = ds[resPath[i]];
                        }
                        if (typeof ds === 'string') {
                            ds = JSON.parse(ds);
                        }
                    } else {
                        ds = data;
                    }
                } else {
                    ds = data;
                }
            }
            if (context._isPagingReq || context._isFilteringReq) {
                this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, data, context);
            }
            if (data.Metadata) {
                this._metadata = data.Metadata;
            }
            this.summariesResponse(this.settings.summaries.summariesResponseKey, data);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_processJsonResponse', __ms);
            }
            return ds;
        },
        _processXmlResponse: function (data, isParsed, context) {
            var __start = new Date().getTime();
            var ds, schema = context.schema(), tmpSchema, resKey;
            if (schema && schema.fields && schema.fields().length > 0) {
                ds = this.settings.localSchemaTransform ? schema.transform(data) : data;
            } else {
                resKey = context.settings.responseDataKey;
                if (resKey && resKey !== '') {
                    tmpSchema = new $.ig.DataSchema();
                    ds = context._xmlToArray(tmpSchema._findXmlRecordsRoot(data, resKey));
                } else {
                    ds = context._xmlToArray(data);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_processXmlResponse', __ms);
            }
            return ds;
        },
        _xmlToArray: function (data) {
            var __start = new Date().getTime();
            var ds = [], root = data, i, r, j, name, val, o;
            o = window.ActiveXObject;
            if (data && data.childNodes && data.childNodes.length === 1) {
                root = data.childNodes[0];
            }
            for (i = 0; i < root.childNodes.length; i++) {
                r = root.childNodes[i];
                ds[i] = [];
                for (j = 0; j < r.childNodes.length; j++) {
                    name = o === undefined ? r.childNodes[j].localName : r.childNodes[j].baseName;
                    val = o === undefined ? r.childNodes[j].textContent : r.childNodes[j].text;
                    ds[i][name] = val;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_xmlToArray', __ms);
            }
            return ds;
        },
        _encodeUrl: function () {
            var __start = new Date().getTime();
            var props = this.settings, sParams = {}, fParams = {}, pParams = {}, params, selParams = {}, sumParams = {}, extraParams = {}, pkParams = {}, noCancel = true;
            params = {
                sortingParams: sParams,
                filteringParams: fParams,
                pagingParams: pParams,
                selectParams: selParams,
                summariesParams: sumParams,
                extraParams: extraParams,
                pkParams: pkParams
            };
            if ($.isFunction(props.urlParamsEncoding)) {
                noCancel = props.urlParamsEncoding(this, params);
            }
            if (noCancel) {
                this._encodeSelectParams(params);
                this._encodeSortingParams(params);
                this._encodeFilteringParams(params);
                this._encodePagingParams(params);
                this._encodeSummariesParams(params);
                this._encodePkParams(params);
                if ($.isFunction(this.settings.encodeExtraParams)) {
                    this.settings.encodeExtraParams(this, params);
                }
                if ($.isFunction(props.urlParamsEncoded)) {
                    props.urlParamsEncoded(this, params);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodeUrl', __ms);
            }
            return $.extend(true, {}, params.sortingParams, params.filteringParams, params.pagingParams, params.selectParams, params.summariesParams, params.extraParams, params.pkParams);
        },
        _encodePkParams: function (params) {
            var __start = new Date().getTime();
            var p = this.settings.paging, s = this.settings.sorting, f = this.settings.filtering, sm = this.settings.summaries, pk = this._schema ? this._schema._pk : null;
            if (pk && (p.enabled && p.type === 'remote' || s.type === 'remote' || f.type === 'remote' || sm.type === 'remote')) {
                params.pkParams.pk = pk;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodePkParams', __ms);
            }
        },
        _encodeSelectParams: function (params) {
            var __start = new Date().getTime();
            var selParams = params.selectParams, i;
            if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length > 0) {
                selParams.$select = '';
                for (i = 0; i < this.schema().fields().length; i++) {
                    if (i !== 0) {
                        selParams.$select += ',';
                    }
                    selParams.$select += this.schema().fields()[i].name;
                }
            } else if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length === 0) {
                selParams.$select = '*';
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodeSelectParams', __ms);
            }
        },
        _encodePagingParams: function (params) {
            var __start = new Date().getTime();
            var p = this.settings.paging;
            if (p.enabled && p.type === 'remote') {
                this._isPagingReq = true;
                if (p.pageIndexUrlKey !== null && p.pageSizeUrlKey !== null) {
                    params.pagingParams[p.pageIndexUrlKey] = this.pageIndex();
                    params.pagingParams[p.pageSizeUrlKey] = this.pageSize();
                } else {
                    params.pagingParams.$skip = this.pageIndex() * this.pageSize();
                    params.pagingParams.$top = this.pageSize();
                    params.pagingParams.$inlinecount = 'allpages';
                    if (this.settings.responseTotalRecCountKey === null) {
                        this.settings.responseTotalRecCountKey = 'd.__count';
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodePagingParams', __ms);
            }
        },
        _encodeSortingParams: function (params) {
            var __start = new Date().getTime();
            var s = this.settings.sorting, tmpdir, i, sfields, url, urlQS, hlayout = null;
            if (s.type === 'remote') {
                if (s.exprString) {
                    sfields = this._parseSortExpressions(s.exprString);
                } else {
                    sfields = s.expressions;
                }
                this._isSortingReq = true;
                for (i = 0; i < sfields.length; i++) {
                    if (sfields[i].layout) {
                        hlayout = sfields[i].layout;
                    }
                    if (s.sortUrlAscValueKey !== null && s.sortUrlDescValueKey !== null && s.sortUrlKey !== null) {
                        tmpdir = sfields[i].dir && sfields[i].dir.toLowerCase().startsWith('asc') ? s.sortUrlAscValueKey : s.sortUrlDescValueKey;
                        params.sortingParams[s.sortUrlKey + '(' + sfields[i].fieldName + ')'] = tmpdir;
                    } else {
                        if (params.sortingParams.$orderby === undefined) {
                            params.sortingParams.$orderby = '';
                        }
                        params.sortingParams.$orderby = params.sortingParams.$orderby + sfields[i].fieldName + ' ' + sfields[i].dir.toLowerCase();
                        if (i < sfields.length - 1) {
                            params.sortingParams.$orderby += ',';
                        }
                    }
                }
                if (hlayout) {
                    url = this.settings.dataSource;
                    if (url && $.type(url) === 'string' && url.indexOf('layout=' + hlayout) >= 0) {
                        url = url.substr(url.indexOf('?') + 1);
                        urlQS = url.split('&');
                        for (i = 0; i < urlQS.length; i++) {
                            if (urlQS[i].indexOf('layout=') >= 0) {
                                if (urlQS[i].replace('layout=', '') === hlayout) {
                                    hlayout = null;
                                }
                                break;
                            }
                        }
                    }
                    if (hlayout) {
                        params.sortingParams.layout = hlayout;
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodeSortingParams', __ms);
            }
        },
        _encodeFilteringParams: function (params) {
            var __start = new Date().getTime();
            var f = this.settings.filtering, ffields, i, key, exprNotReq, cond, d, day, month, year, curDate, expr, fieldName;
            if (f.type === 'remote') {
                if (f.exprString) {
                    ffields = this._parseFilterExprString(f.exprString);
                } else {
                    ffields = f.expressions;
                }
                for (i = 0; i < ffields.length; i++) {
                    this._isFilteringReq = true;
                    cond = ffields[i].cond;
                    exprNotReq = cond === 'false' || cond === 'true' || cond === 'today' || cond === 'yesterday' || cond === 'thisMonth' || cond === 'lastMonth' || cond === 'nextMonth' || cond === 'thisYear' || cond === 'lastYear' || cond === 'nextYear' || cond === 'null' || cond === 'notNull' || cond === 'empty' || cond === 'notEmpty';
                    if (f.filterExprUrlKey !== null) {
                        key = f.filterExprUrlKey + '(' + ffields[i].fieldName + ')';
                        if ($.type(ffields[i].expr) === 'date') {
                            d = Date.UTC(ffields[i].expr.getFullYear(), ffields[i].expr.getMonth(), ffields[i].expr.getDate(), ffields[i].expr.getHours(), ffields[i].expr.getMinutes());
                        } else {
                            d = ffields[i].expr;
                        }
                        if (params.filteringParams[key] === undefined) {
                            params.filteringParams[key] = ffields[i].cond + '(' + (exprNotReq ? '' : d) + ')';
                        } else {
                            params.filteringParams[key] = params.filteringParams[key] + ',' + ffields[i].cond + '(' + (exprNotReq ? '' : d) + ')';
                        }
                    } else {
                        if (params.filteringParams.$filter === undefined) {
                            params.filteringParams.$filter = '';
                        }
                        fieldName = ffields[i].fieldName;
                        expr = ffields[i].expr;
                        if (!f.caseSensitive && $.type(expr) === 'string') {
                            fieldName = 'tolower(' + fieldName + ')';
                            expr = expr.toLowerCase();
                        }
                        if (ffields[i].cond === 'startsWith') {
                            params.filteringParams.$filter += 'startswith(' + fieldName + ',' + '\'' + expr + '\') eq true';
                        } else if (ffields[i].cond === 'endsWith') {
                            params.filteringParams.$filter += 'endswith(' + fieldName + ',' + '\'' + expr + '\') eq true';
                        } else if (ffields[i].cond === 'contains') {
                            params.filteringParams.$filter += 'indexof(' + fieldName + ',' + '\'' + expr + '\') ge 0';
                        } else if (ffields[i].cond === 'doesNotContain') {
                            params.filteringParams.$filter += 'indexof(' + fieldName + ',' + '\'' + expr + '\') eq -1';
                        } else if (ffields[i].cond === 'equals') {
                            if ($.type(ffields[i].expr) === 'string') {
                                params.filteringParams.$filter += fieldName + ' eq ' + '\'' + expr + '\'';
                            } else {
                                params.filteringParams.$filter += ffields[i].fieldName + ' eq ' + ffields[i].expr;
                            }
                        } else if (ffields[i].cond === 'true') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' eq true';
                        } else if (ffields[i].cond === 'false') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' eq false';
                        } else if (ffields[i].cond === 'doesNotEqual') {
                            if ($.type(ffields[i].expr) === 'string') {
                                params.filteringParams.$filter += fieldName + ' ne ' + '\'' + expr + '\'';
                            } else {
                                params.filteringParams.$filter += ffields[i].fieldName + ' ne ' + ffields[i].expr;
                            }
                        } else if (ffields[i].cond === 'greaterThan') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' gt ' + ffields[i].expr;
                        } else if (ffields[i].cond === 'lessThan') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' lt ' + ffields[i].expr;
                        } else if (ffields[i].cond === 'greaterThanOrEqualTo') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' ge ' + ffields[i].expr;
                        } else if (ffields[i].cond === 'lessThanOrEqualTo') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' le ' + ffields[i].expr;
                        } else if (ffields[i].cond === 'null') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' eq null';
                        } else if (ffields[i].cond === 'notNull') {
                            params.filteringParams.$filter += ffields[i].fieldName + ' ne null';
                        } else if (ffields[i].cond === 'empty') {
                            params.filteringParams.$filter += 'length(' + ffields[i].fieldName + ') eq 0';
                        } else if (ffields[i].cond === 'notEmpty') {
                            params.filteringParams.$filter += 'length(' + ffields[i].fieldName + ') gt 0';
                        } else if (ffields[i].cond === 'on') {
                            expr = this._parser.toDate(ffields[i].expr);
                            year = expr.getFullYear();
                            month = expr.getMonth() + 1;
                            day = expr.getDate();
                            params.filteringParams.$filter += 'day(' + ffields[i].fieldName + ') eq ' + day + ' and ';
                            params.filteringParams.$filter += 'month(' + ffields[i].fieldName + ') eq ' + month + ' and ';
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'notOn') {
                            expr = this._parser.toDate(ffields[i].expr);
                            params.filteringParams.$filter += ffields[i].fieldName + ' ne DateTime\'' + $.ig.formatter(expr, 'date', 'yyyy-MM-dd') + '\'';
                        } else if (ffields[i].cond === 'after') {
                            expr = this._parser.toDate(ffields[i].expr);
                            params.filteringParams.$filter += ffields[i].fieldName + ' gt DateTime\'' + $.ig.formatter(expr, 'date', 'yyyy-MM-dd') + '\'';
                        } else if (ffields[i].cond === 'before') {
                            expr = this._parser.toDate(ffields[i].expr);
                            params.filteringParams.$filter += ffields[i].fieldName + ' lt DateTime\'' + $.ig.formatter(expr, 'date', 'yyyy-MM-dd') + '\'';
                        } else if (ffields[i].cond === 'today') {
                            expr = this._parser.toDate(ffields[i].expr);
                            year = expr.getFullYear();
                            month = expr.getMonth() + 1;
                            day = expr.getDate();
                            params.filteringParams.$filter += 'day(' + ffields[i].fieldName + ') eq ' + day + ' and ';
                            params.filteringParams.$filter += 'month(' + ffields[i].fieldName + ') eq ' + month + ' and ';
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'yesterday') {
                            expr = this._parser.toDate(ffields[i].expr);
                            year = expr.getFullYear();
                            month = expr.getMonth() + 1;
                            day = expr.getDate();
                            params.filteringParams.$filter += 'day(' + ffields[i].fieldName + ') eq ' + day + ' and ';
                            params.filteringParams.$filter += 'month(' + ffields[i].fieldName + ') eq ' + month + ' and ';
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'thisMonth') {
                            curDate = new Date();
                            month = curDate.getMonth() + 1;
                            year = curDate.getFullYear();
                            params.filteringParams.$filter += 'month(' + ffields[i].fieldName + ') eq ' + month + ' and ';
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'lastMonth') {
                            curDate = new Date();
                            month = curDate.getMonth() + 1;
                            year = curDate.getFullYear();
                            if (month === 1) {
                                month = 12;
                                year--;
                            } else {
                                month--;
                            }
                            params.filteringParams.$filter += 'month(' + ffields[i].fieldName + ') eq ' + month + ' and ';
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'nextMonth') {
                            curDate = new Date();
                            month = curDate.getMonth() + 1;
                            year = curDate.getFullYear();
                            if (month === 12) {
                                month = 1;
                                year++;
                            } else {
                                month++;
                            }
                            params.filteringParams.$filter += 'month(' + ffields[i].fieldName + ') eq ' + month + ' and ';
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'thisYear') {
                            curDate = new Date();
                            year = curDate.getFullYear();
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'lastYear') {
                            curDate = new Date();
                            year = curDate.getFullYear() - 1;
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        } else if (ffields[i].cond === 'nextYear') {
                            curDate = new Date();
                            year = curDate.getFullYear() + 1;
                            params.filteringParams.$filter += 'year(' + ffields[i].fieldName + ') eq ' + year;
                        }
                        if (i < ffields.length - 1) {
                            params.filteringParams.$filter += ' and ';
                        }
                    }
                }
                if (f.filterLogicUrlKey !== null && ffields.length > 0) {
                    params.filteringParams[f.filterLogicUrlKey] = ffields[0].logic;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodeFilteringParams', __ms);
            }
        },
        _encodeSummariesParams: function (params) {
            var __start = new Date().getTime();
            var i, j, s = this.settings.summaries, cs = s.columnSettings, methodsStr, csLength = cs.length;
            if (s.type === 'remote') {
                for (i = 0; i < csLength; i++) {
                    methodsStr = '';
                    if (cs[i].summaryOperands === undefined || cs[i].summaryOperands === null) {
                        continue;
                    }
                    for (j = 0; j < cs[i].summaryOperands.length; j++) {
                        if (cs[i].summaryOperands[j].active === true || cs[i].summaryOperands[j].active === 1) {
                            methodsStr += cs[i].summaryOperands[j].type + ',';
                        }
                    }
                    if (methodsStr !== '') {
                        params.summariesParams[s.summaryExprUrlKey + '(' + cs[i].columnKey + ')'] = methodsStr.slice(0, -1);
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodeSummariesParams', __ms);
            }
        },
        _page: function (keepRecords) {
            var __start = new Date().getTime();
            var count = 0, startIndex, endIndex, i = 0;
            if (keepRecords === undefined) {
                keepRecords = false;
            }
            if (keepRecords) {
                count = this._dataView.length;
            } else {
                this._dataView = [];
            }
            if (!this._filter) {
                startIndex = this.pageIndex() * this.pageSize();
                endIndex = startIndex + this.pageSize() >= this._data.length ? this._data.length : startIndex + this.pageSize();
                for (i = startIndex; i < endIndex; i++) {
                    this._dataView[count++] = this._data[i];
                }
            } else {
                startIndex = this.pageIndex() * this.pageSize();
                endIndex = startIndex + this.pageSize() >= this._filteredData.length ? this._filteredData.length : startIndex + this.pageSize();
                for (i = startIndex; i < endIndex; i++) {
                    this._dataView[count++] = this._filteredData[i];
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_page', __ms);
            }
        },
        sort: function (fields, direction, keepSortState) {
            var __start = new Date().getTime();
            var s = this.settings.sorting, schema, sortF, convertFunc, p = this.settings.paging, data, resetPaging = false, settings = this.settings;
            if (fields === undefined || fields === null) {
                throw new Error($.ig.DataSourceLocale.locale.noSortingFields);
            }
            sortF = function (grid, fields, schema, reverse, convertf) {
                var __start = new Date().getTime();
                reverse = reverse ? -1 : 1;
                function compareVals(format, enableUTCDates, rowTemplate, x, y) {
                    var __start = new Date().getTime();
                    if (format) {
                        if ($.type(x) === 'date' && $.type(y) === 'date') {
                            if (format === 'time' || format === 'timeLong' || format === 'h:mm:ss tt') {
                                x = new Date('January 01, 2000 ' + $.ig.formatter(x, 'date', format, rowTemplate, enableUTCDates));
                                y = new Date('January 01, 2000 ' + $.ig.formatter(y, 'date', format, rowTemplate, enableUTCDates));
                            }
                        }
                    }
                    if ((x === null || x === undefined) && (y === null || y === undefined)) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('compareVals', __ms);
                        }
                        return 0;
                    }
                    if ((x === null || x === undefined) && y !== null && y !== undefined) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('compareVals', __ms);
                        }
                        return -1;
                    }
                    if (x !== null && x !== undefined && (y === null || y === undefined)) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('compareVals', __ms);
                        }
                        return 1;
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('compareVals', __ms);
                    }
                    return x > y ? 1 : x < y ? -1 : 0;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return function (obj1, obj2) {
                    var __start = new Date().getTime();
                    var i, f, arr1 = [], arr2 = [], a, b, key, col, format, o, enableUTCDates, rowTemplate;
                    if (grid) {
                        o = grid.options;
                        enableUTCDates = o.enableUTCDates;
                        rowTemplate = !o.rowTemplate || o.rowTemplate.length <= 0;
                    }
                    for (i = 0; i < fields.length; i++) {
                        key = fields[i].fieldName;
                        if (grid && grid.columnByKey) {
                            col = grid.columnByKey(key);
                            if (col !== undefined && col !== null) {
                                format = col.format;
                            }
                        }
                        if (fields[i].layout && (settings.key && settings.key !== fields[i].layout || !settings.key)) {
                            continue;
                        }
                        f = fields[i];
                        if (f.fieldIndex >= 0) {
                            f.fieldName = f.fieldIndex;
                        }
                        a = obj1[f.fieldName];
                        b = obj2[f.fieldName];
                        if (convertf !== undefined) {
                            a = convertf(a, f.fieldName);
                            b = convertf(b, f.fieldName);
                        }
                        if (s.caseSensitive === false) {
                            if (a !== undefined && a !== null && a.toLowerCase) {
                                a = a.toLowerCase();
                            }
                            if (b !== undefined && b !== null && b.toLowerCase) {
                                b = b.toLowerCase();
                            }
                        }
                        if (f.dir !== undefined && f.dir !== null) {
                            reverse = f.dir.toLowerCase().startsWith('desc');
                            reverse = reverse ? -1 : 1;
                        } else if (direction !== undefined && direction !== null && direction !== '') {
                            reverse = direction.toLowerCase().startsWith('desc');
                            reverse = reverse ? -1 : 1;
                        }
                        if (fields.length === 1) {
                            arr1 = reverse * compareVals(format, enableUTCDates, rowTemplate, a, b);
                            arr2 = reverse * compareVals(format, enableUTCDates, rowTemplate, b, a);
                        } else {
                            if (reverse === -1) {
                                arr1.push(-compareVals(format, enableUTCDates, rowTemplate, a, b));
                                arr2.push(-compareVals(format, enableUTCDates, rowTemplate, b, a));
                            } else {
                                arr1.push(compareVals(format, enableUTCDates, rowTemplate, a, b));
                                arr2.push(compareVals(format, enableUTCDates, rowTemplate, b, a));
                            }
                        }
                    }
                    if (arr1 < arr2) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                        return -1;
                    }
                    if (arr1 > arr2) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                        return 1;
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                    return 0;
                };
            };
            if (s.applyToAllData && s.type === 'local') {
                if (this._filter && (p.type === 'local' && p.enabled === true || p.enabled === false || p.type === 'remote' && p.enabled === true && this.settings.filtering.type === 'local')) {
                    data = this._filteredData;
                } else {
                    data = this.data();
                }
                resetPaging = true;
            } else {
                data = this.dataView();
            }
            if ($.type(s.customFunc) === 'function') {
                data = s.customFunc(data, fields, direction);
            } else {
                schema = this.settings.schema;
                if (!direction) {
                    direction = '';
                }
                if ($.type(s.compareFunc) === 'function') {
                    sortF = s.compareFunc;
                }
                if ($.isFunction(s.customConvertFunc)) {
                    convertFunc = s.customConvertFunc;
                }
                if ($.type(fields) === 'string') {
                    fields = this._parseSortExpressions(fields);
                }
                if (fields.length > 0) {
                    data = data.sort(sortF(this.settings.callee, fields, schema, direction.toLowerCase().startsWith('asc') ? false : true, convertFunc));
                    this._allDataSorted = data === this.data();
                }
            }
            if (resetPaging && p.type === 'local') {
                if (!this._filter) {
                    this._data = data;
                } else {
                    this._filteredData = data;
                }
                this._page();
            } else {
                this._dataView = data;
            }
            this._populateTransformedData(data);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('sort', __ms);
            }
            return this;
        },
        clearLocalSorting: function () {
            var __start = new Date().getTime();
            var s = this.settings.sorting, p = this.settings.paging, data, resetPaging = false;
            if (s.applyToAllData && s.type === 'local') {
                if (this._filter && (p.type === 'local' && p.enabled === true || p.enabled === false)) {
                    data = this._filteredData;
                } else {
                    data = this.data();
                }
                resetPaging = true;
            } else {
                data = this.dataView();
            }
            if (resetPaging && p.type === 'local') {
                if (!this._filter) {
                    this._data = data;
                } else {
                    this._filteredData = data;
                }
                this._page();
            } else {
                this._dataView = data;
            }
            this._populateTransformedData();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('clearLocalSorting', __ms);
            }
            return this;
        },
        _parseSortExpressions: function (s) {
            var __start = new Date().getTime();
            var fields = [], tmp, tmp2, i;
            tmp = s.split(',');
            for (i = 0; i < tmp.length; i++) {
                fields[i] = {};
                tmp2 = $.trim(tmp[i]).split(' ');
                fields[i].fieldName = tmp2[0];
                fields[i].dir = tmp2[1];
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_parseSortExpressions', __ms);
            }
            return fields;
        },
        filter: function (fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings) {
            var __start = new Date().getTime();
            var i, j, expr = null, count = 0, skipRec = false, f = this.settings.filtering, p = this.settings.paging, data, t, k, schema, fields, tmpbool, resetPaging, allFieldsExpr, stringVal;
            schema = this.schema();
            if (schema === null || schema === undefined) {
                throw new Error($.ig.DataSourceLocale.locale.filteringNoSchema);
            }
            if ($.type(fieldExpressions) === 'string') {
                expr = fieldExpressions;
            }
            if ($.type(fieldExpressionsOnStrings) === 'string') {
                allFieldsExpr = fieldExpressionsOnStrings;
            } else if ($.type(fieldExpressionsOnStrings) === 'undefined') {
                fieldExpressionsOnStrings = [];
            }
            if ($.type(fieldExpressions) === 'array' && fieldExpressions.length === 0 && $.type(fieldExpressionsOnStrings) === 'array' && fieldExpressionsOnStrings.length === 0) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('filter', __ms);
                }
                return;
            }
            if (f.applyToAllData && f.type === 'local') {
                data = this.data();
                resetPaging = true;
            } else {
                if (this._cachedDataView && this._cachedDataView.length > 0) {
                    data = this._cachedDataView;
                } else {
                    this._cachedDataView = $.merge([], this.dataView());
                    data = this._cachedDataView;
                }
            }
            if ($.type(f.customFunc) === 'function') {
                data = f.customFunc(fieldExpressions, data);
                this._filteredData = data;
                this._dataView = [];
            } else {
                this._dataView = [];
                this._filteredData = [];
                for (i = 0; i < data.length; i++) {
                    skipRec = false;
                    if (expr) {
                        fieldExpressions = this._parseFilterExprString(expr);
                    }
                    if (allFieldsExpr) {
                        fieldExpressionsOnStrings = this._parseFilterExprString(allFieldsExpr);
                    }
                    for (j = 0; j < fieldExpressions.length; j++) {
                        fields = schema.fields();
                        if (fieldExpressions[j].fieldIndex) {
                            if (fieldExpressions[j].fieldIndex < fields.length) {
                                t = fields[fieldExpressions[j].fieldIndex].type;
                            }
                            skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldIndex], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond);
                        } else {
                            if (fieldExpressions[j].dataType !== undefined && fieldExpressions[j].dataType !== null) {
                                t = fieldExpressions[j].dataType;
                            } else {
                                for (k = 0; k < fields.length; k++) {
                                    if (fields[k].name === fieldExpressions[j].fieldName) {
                                        t = fields[k].type;
                                        break;
                                    }
                                }
                            }
                            skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldName], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond);
                        }
                        tmpbool = fieldExpressions[j].logic !== null && fieldExpressions[j].logic !== undefined && (fieldExpressions[j].logic.toLowerCase() === 'or' || fieldExpressions[j].logic.toLowerCase() === 'and') ? fieldExpressions[j].logic : boolLogic;
                        if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== 'string') {
                            tmpbool = 'and';
                        }
                        if (skipRec && tmpbool.toLowerCase() === 'and') {
                            break;
                        } else if (!skipRec && tmpbool.toLowerCase() === 'or') {
                            break;
                        }
                    }
                    if (!skipRec) {
                        for (j = 0; j < fieldExpressionsOnStrings.length; j++) {
                            fields = schema.fields();
                            if (fieldExpressionsOnStrings[j].fieldIndex) {
                                if (fieldExpressionsOnStrings[j].fieldIndex < fields.length) {
                                    t = fields[fieldExpressionsOnStrings[j].fieldIndex].type;
                                }
                                stringVal = data[i][fieldExpressionsOnStrings[j].fieldIndex] ? data[i][fieldExpressionsOnStrings[j].fieldIndex].toString() : '';
                                skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, 'string', !f.caseSensitive, fieldExpressionsOnStrings[j].cond);
                            } else {
                                for (k = 0; k < fields.length; k++) {
                                    if (fields[k].name === fieldExpressionsOnStrings[j].fieldName) {
                                        t = fields[k].type;
                                        break;
                                    }
                                }
                                stringVal = data[i][fieldExpressionsOnStrings[j].fieldName] !== null && data[i][fieldExpressionsOnStrings[j].fieldName] !== undefined ? data[i][fieldExpressionsOnStrings[j].fieldName].toString() : '';
                                skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, 'string', !f.caseSensitive, fieldExpressionsOnStrings[j].cond);
                            }
                            tmpbool = fieldExpressionsOnStrings[j].logic !== null && fieldExpressionsOnStrings[j].logic !== undefined && (fieldExpressionsOnStrings[j].logic.toLowerCase() === 'or' || fieldExpressionsOnStrings[j].logic.toLowerCase() === 'and') ? fieldExpressionsOnStrings[j].logic : boolLogic;
                            if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== 'string') {
                                tmpbool = 'and';
                            }
                            if (skipRec && tmpbool.toLowerCase() === 'and') {
                                break;
                            } else if (!skipRec && tmpbool.toLowerCase() === 'or') {
                                break;
                            }
                        }
                    }
                    if (!skipRec) {
                        this._filteredData[count++] = data[i];
                    }
                }
            }
            this._filter = true;
            if (resetPaging && p.type === 'local' && p.enabled === true) {
                this.settings.paging.pageIndex = 0;
                this.pageSizeDirty(true);
                this._page();
            } else {
                for (i = 0; i < this._filteredData.length; i++) {
                    this._dataView[i] = this._filteredData[i];
                }
            }
            this._populateTransformedData(this._filteredData);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('filter', __ms);
            }
            return this;
        },
        clearLocalFilter: function () {
            var __start = new Date().getTime();
            var i, f = this.settings.filtering, p = this.settings.paging, data, resetPaging;
            if (f.applyToAllData && f.type === 'local') {
                data = this.data();
                resetPaging = true;
            } else {
                if (this._cachedDataView && this._cachedDataView.length > 0) {
                    data = this._cachedDataView;
                } else {
                    this._cachedDataView = $.merge([], this.dataView());
                    data = this._cachedDataView;
                }
            }
            this._dataView = [];
            this._filteredData = data;
            if (resetPaging && p.type === 'local' && p.enabled === true) {
                this._filter = true;
                this.settings.paging.pageIndex = 0;
                this.pageSizeDirty(true);
                this._page();
            } else {
                if (p.enabled === false) {
                    this._filter = true;
                }
                for (i = 0; i < this._filteredData.length; i++) {
                    this._dataView[i] = this._filteredData[i];
                }
            }
            this._populateTransformedData(this._filteredData);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('clearLocalFilter', __ms);
            }
            return this;
        },
        _parseFilterExprString: function (expr) {
            var __start = new Date().getTime();
            var exprs = $.trim(expr).split(/(?=AND+)|(?=OR+)/i), i, j, fields = [], tmp, tmp2, isInvalid = true;
            for (i = 0; i < exprs.length; i++) {
                fields[i] = {};
                tmp = $.trim(exprs[i]).split(/(?= \=+)|(?=<>+)|(?=>+)|(?=<+)|(?=LIKE+)|(?=NOT\WLIKE)+|(?=>\=+)|(?=<\=+)/);
                if ($.trim(exprs[i]).toLowerCase().startsWith('and')) {
                    fields[i].logic = 'AND';
                } else if ($.trim(exprs[i]).toLowerCase().startsWith('or')) {
                    fields[i].logic = 'OR';
                }
                if (i > 0 && (fields[i].logic === 'AND' || fields[i].logic === 'OR')) {
                    fields[i - 1].logic = fields[i].logic;
                }
                if (tmp[0].toLowerCase().startsWith('and') || tmp[0].toLowerCase().startsWith('or')) {
                    fields[i].fieldName = $.trim(tmp[0].split(' ')[1]);
                } else {
                    fields[i].fieldName = $.trim(tmp[0]);
                }
                tmp2 = $.trim(tmp[1]).split(' ');
                if (exprs[i].indexOf('<>') !== -1) {
                    tmp2[0] = '<>';
                    tmp2[1] = tmp[2].replace('>', '');
                }
                if (tmp2.length > 2) {
                    for (j = 2; j < tmp2.length; j++) {
                        tmp2[1] = tmp2[1] + ' ' + tmp2[j];
                    }
                    tmp2 = [
                        tmp2[0],
                        tmp2[1]
                    ];
                }
                if (tmp[1].startsWith('NOT')) {
                    fields[i].expr = $.trim(tmp[2].replace('LIKE', ''));
                } else {
                    fields[i].expr = tmp2[1];
                }
                for (j = 0; j < this.schema().schema.fields.length; j++) {
                    if (this.schema().schema.fields[j].name === fields[i].fieldName) {
                        isInvalid = false;
                        break;
                    }
                }
                if (isInvalid) {
                    throw new Error($.ig.DataSourceLocale.locale.fieldMismatch + fields[i].fieldName);
                }
                isInvalid = true;
                if (tmp2[0] === '>') {
                    fields[i].cond = 'greaterThan';
                } else if (tmp2[0] === 'LIKE') {
                    if (fields[i].expr.startsWith('%') && fields[i].expr.endsWith('%')) {
                        fields[i].cond = 'contains';
                    } else if (fields[i].expr.endsWith('%')) {
                        fields[i].cond = 'startsWith';
                    } else if (fields[i].expr.startsWith('%')) {
                        fields[i].cond = 'endsWith';
                    } else {
                        fields[i].cond = 'equals';
                    }
                    fields[i].expr = fields[i].expr.replace(/%/g, '');
                } else if (tmp2[0] === 'NOT LIKE' || tmp2[0] === 'NOT') {
                    if (fields[i].expr.startsWith('%') && fields[i].expr.endsWith('%')) {
                        fields[i].cond = 'doesNotContain';
                    } else {
                        fields[i].cond = 'doesNotEqual';
                    }
                    fields[i].expr = fields[i].expr.replace(/%/g, '');
                } else if (tmp2[0] === '=') {
                    fields[i].cond = 'equals';
                } else if (tmp2[0] === '<>') {
                    fields[i].cond = 'doesNotEqual';
                } else if (tmp2[0] === '<') {
                    fields[i].cond = 'lessThan';
                } else if (tmp2[0] === '<=') {
                    fields[i].cond = 'lessThanOrEqualTo';
                } else if (tmp2[0] === '>=') {
                    fields[i].cond = 'greaterThanOrEqualTo';
                } else {
                    throw new Error($.ig.DataSourceLocale.locale.unrecognizedCondition + expr);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_parseFilterExprString', __ms);
            }
            return fields;
        },
        _findMatch: function (val, expr, t, ignoreCase, cond) {
            var __start = new Date().getTime();
            var tmpExpr, exprNotReq = cond === 'false' || cond === 'true' || cond === 'today' || cond === 'yesterday' || cond === 'thisMonth' || cond === 'lastMonth' || cond === 'nextMonth' || cond === 'thisYear' || cond === 'lastYear' || cond === 'nextYear' || cond === 'null' || cond === 'notNull' || cond === 'empty' || cond === 'notEmpty';
            if (expr === '' && !exprNotReq) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findMatch', __ms);
                }
                return true;
            }
            tmpExpr = $.trim(expr);
            if (t === 'regexp' || t === 'string' && tmpExpr.startsWith('/') && tmpExpr.endsWith('/')) {
                if (t === 'regexp') {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_findMatch', __ms);
                    }
                    return this._findRegExpMatch(val, expr, false);
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findMatch', __ms);
                }
                return this._findRegExpMatch(val, tmpExpr.substring(1, tmpExpr.length - 1), true);
            }
            if ($.type(val) === 'date' && (t === undefined || t === null) || t === 'date') {
                try {
                    expr = this._parser.toDate(expr);
                } catch (ignore) {
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findMatch', __ms);
                }
                return this._findDateMatch(val, expr, cond);
            }
            if ($.type(val) === 'boolean' && (t === undefined || t === null) || t === 'boolean' || t === 'bool') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findMatch', __ms);
                }
                return this._findBoolMatch(val, cond);
            }
            if ($.type(val) === 'number' && (t === undefined || t === null) || t === 'number') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findMatch', __ms);
                }
                return this._findNumericMatch(val, expr, cond);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_findMatch', __ms);
            }
            return this._findStringMatch(val, expr, ignoreCase, cond);
        },
        _findStringMatch: function (val, expr, ignoreCase, cond) {
            var __start = new Date().getTime();
            var localVal;
            if (val !== null && val !== undefined) {
                localVal = ignoreCase ? val.toString().toLowerCase() : val || '';
            } else {
                localVal = val;
            }
            if (expr !== null && expr !== undefined) {
                expr = ignoreCase ? expr.toString().toLowerCase() : expr.toString();
            }
            if (cond === 'startsWith') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal !== null && localVal !== undefined && localVal.startsWith(expr);
            }
            if (cond === 'endsWith') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal !== null && localVal !== undefined && localVal.endsWith(expr);
            }
            if (cond === 'contains') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal !== null && localVal !== undefined && localVal.indexOf(expr) !== -1;
            }
            if (cond === 'doesNotContain') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal !== null && localVal !== undefined && localVal.indexOf(expr) === -1;
            }
            if (cond === 'equals') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal !== null && localVal !== undefined && localVal === expr;
            }
            if (cond === 'doesNotEqual') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal !== null && localVal !== undefined && localVal !== expr;
            }
            if (cond === 'null') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal === null;
            }
            if (cond === 'notNull') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal !== null;
            }
            if (cond === 'empty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal === null || localVal === undefined || localVal.length === 0;
            }
            if (cond === 'notEmpty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findStringMatch', __ms);
                }
                return localVal === null || localVal === undefined || localVal.length !== 0;
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_findStringMatch', __ms);
            }
        },
        _findRegExpMatch: function (val, expr, str) {
            var __start = new Date().getTime();
            if (str) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findRegExpMatch', __ms);
                }
                return new RegExp(expr).test(val);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_findRegExpMatch', __ms);
            }
            return val.match(expr);
        },
        _findNumericMatch: function (val, expr, cond) {
            var __start = new Date().getTime();
            if ($.type(expr) !== 'number') {
                expr = this._parser.toNumber(expr);
            }
            if (cond === 'equals') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val === expr;
            }
            if (cond === 'doesNotEqual') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val !== expr;
            }
            if (cond === 'greaterThan') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val > expr;
            }
            if (cond === 'lessThan') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val < expr;
            }
            if (cond === 'greaterThanOrEqualTo') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val >= expr;
            }
            if (cond === 'lessThanOrEqualTo') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val <= expr;
            }
            if (cond === 'null') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val === null;
            }
            if (cond === 'notNull') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val !== null;
            }
            if (cond === 'empty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val === null || val === undefined || isNaN(val);
            }
            if (cond === 'notEmpty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findNumericMatch', __ms);
                }
                return val !== null && val !== undefined && !isNaN(val);
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_findNumericMatch', __ms);
            }
        },
        _findBoolMatch: function (val, cond) {
            var __start = new Date().getTime();
            if (cond === 'true') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findBoolMatch', __ms);
                }
                return val;
            }
            if (cond === 'false') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findBoolMatch', __ms);
                }
                return !val;
            }
            if (cond === 'null') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findBoolMatch', __ms);
                }
                return val === null;
            }
            if (cond === 'notNull') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findBoolMatch', __ms);
                }
                return val !== null;
            }
            if (cond === 'empty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findBoolMatch', __ms);
                }
                return val === null || val === undefined;
            }
            if (cond === 'notEmpty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findBoolMatch', __ms);
                }
                return val !== null && val !== undefined;
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_findBoolMatch', __ms);
            }
        },
        _findDateMatch: function (val, expr, cond) {
            var __start = new Date().getTime();
            var day1, mins1, hs1, yrs1, day2, mins2, hs2, yrs2, month1, month2, eq, cur, yrs3, month3, mday1, mday2, mday3, yesterday;
            if (val !== null && val !== undefined) {
                day1 = val.getDay();
                mday1 = val.getDate();
                mins1 = val.getMinutes();
                hs1 = val.getHours();
                yrs1 = val.getYear();
                month1 = val.getMonth();
            }
            if ($.type(expr) === 'date') {
                day2 = expr.getDay();
                mday2 = expr.getDate();
                mins2 = expr.getMinutes();
                hs2 = expr.getHours();
                yrs2 = expr.getYear();
                month2 = expr.getMonth();
            } else {
                expr = new Date(expr);
            }
            cur = new Date();
            yesterday = new Date(cur.getTime());
            yesterday.setDate(yesterday.getDate() - 1);
            mday3 = cur.getDate();
            yrs3 = cur.getYear();
            month3 = cur.getMonth();
            eq = day1 === day2 && mins1 === mins2 && hs1 === hs2 && yrs1 === yrs2 && month1 === month2;
            if (cond === 'equals') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return eq;
            }
            if (cond === 'doesNotEqual') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return !eq;
            }
            if (cond === 'before') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return val < expr;
            }
            if (cond === 'after') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return val > expr;
            }
            if (cond === 'today') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return mday1 === mday3 && month1 === month3 && yrs1 === yrs3;
            }
            if (cond === 'yesterday') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return yesterday.getDay() === val.getDay() && yesterday.getMonth() === val.getMonth() && yesterday.getFullYear() === val.getFullYear();
            }
            if (cond === 'thisMonth') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return month1 === month3 && yrs1 === yrs3;
            }
            if (cond === 'lastMonth') {
                if (month3 === 0) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_findDateMatch', __ms);
                    }
                    return month1 === 11 && yrs1 === yrs3 - 1;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return month1 === month3 - 1 && yrs1 === yrs3;
            }
            if (cond === 'nextMonth') {
                if (month3 === 11) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_findDateMatch', __ms);
                    }
                    return month1 === 0 && yrs1 === yrs3 + 1;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return month1 === month3 + 1 && yrs1 === yrs3;
            }
            if (cond === 'thisYear') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return yrs1 === yrs3;
            }
            if (cond === 'lastYear') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return yrs1 === yrs3 - 1;
            }
            if (cond === 'nextYear') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return yrs1 === yrs3 + 1;
            }
            if (cond === 'on') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return yrs1 === yrs2 && month1 === month2 && mday1 === mday2;
            }
            if (cond === 'notOn') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return !(yrs1 === yrs2 && month1 === month2 && mday1 === mday2);
            }
            if (cond === 'null') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return val === null;
            }
            if (cond === 'notNull') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return val !== null;
            }
            if (cond === 'empty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return val === null || val === undefined;
            }
            if (cond === 'notEmpty') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_findDateMatch', __ms);
                }
                return val !== null && val !== undefined;
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_findDateMatch', __ms);
            }
        },
        totalRecordsCount: function (count, key, dsObj, context) {
            var __start = new Date().getTime();
            var rec, totalRecPath, i;
            if (context !== undefined && context !== null) {
                if (key) {
                    rec = dsObj;
                    if (rec.hasOwnProperty(key)) {
                        rec = rec[key];
                    } else {
                        totalRecPath = key.split('.');
                        for (i = 0; i < totalRecPath.length; i++) {
                            rec = rec[totalRecPath[i]];
                        }
                    }
                    if (dsObj && rec !== undefined && rec !== null) {
                        if ($.type(rec) === 'number') {
                            this._recCount = rec;
                        } else {
                            this._recCount = parseInt(rec, 10);
                        }
                        this.hasTotalRecordsCount(true);
                    } else {
                        this.hasTotalRecordsCount(false);
                    }
                } else {
                    this.hasTotalRecordsCount(false);
                }
            } else if (count !== undefined && count !== null) {
                this._recCount = count;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('totalRecordsCount', __ms);
            }
            return this._recCount;
        },
        hasTotalRecordsCount: function (hasCount) {
            var __start = new Date().getTime();
            if (hasCount === undefined || hasCount === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('hasTotalRecordsCount', __ms);
                }
                return this._hasCount;
            }
            this._hasCount = hasCount;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('hasTotalRecordsCount', __ms);
            }
        },
        metadata: function (key) {
            var __start = new Date().getTime();
            if (key === null || key === undefined || key === '' || this._metadata === null || this._metadata === undefined) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('metadata', __ms);
                }
                return this._metadata;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('metadata', __ms);
            }
            return this._metadata[key];
        },
        totalLocalRecordsCount: function () {
            var __start = new Date().getTime();
            if (!this._filter) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('totalLocalRecordsCount', __ms);
                }
                return this._data.length;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('totalLocalRecordsCount', __ms);
            }
            return this._dataView.length;
        },
        pageCount: function () {
            var __start = new Date().getTime();
            var c, realCount;
            if (!this._filter) {
                realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._data.length;
            } else {
                realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._filteredData.length;
            }
            c = Math.ceil(realCount / this.settings.paging.pageSize);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('pageCount', __ms);
            }
            return c === 0 ? 1 : c;
        },
        pageIndex: function (index) {
            var __start = new Date().getTime();
            if (index === undefined || index === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('pageIndex', __ms);
                }
                return this.settings.paging.pageIndex === undefined ? 0 : this.settings.paging.pageIndex;
            }
            this.settings.paging.pageIndex = parseInt(index, 10);
            this._cachedDataView = null;
            if (this.settings.paging.type === 'local') {
                this._page(this.settings.paging.appendPage);
                this._invokeCallback();
            } else {
                this.dataBind();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('pageIndex', __ms);
            }
            return this;
        },
        prevPage: function () {
            var __start = new Date().getTime();
            this.pageIndex(this.pageIndex() === 0 ? 0 : this.pageIndex() - 1);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('prevPage', __ms);
            }
            return this;
        },
        nextPage: function () {
            var __start = new Date().getTime();
            if (this.pageIndex() >= this.pageCount() - 1) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('nextPage', __ms);
                }
                return this;
            }
            this.pageIndex(this.pageIndex() + 1);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('nextPage', __ms);
            }
            return this;
        },
        pageSize: function (s) {
            var __start = new Date().getTime();
            if (s === undefined || s === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('pageSize', __ms);
                }
                return this.settings.paging.pageSize;
            }
            this.settings.paging.pageSize = parseInt(s, 10);
            if (this.settings.paging.appendPage) {
                this.settings.paging.pageIndex = 0;
                this._cachedDataView = null;
            }
            if (this.settings.paging.type === 'local') {
                this._page();
                this._invokeCallback();
            } else {
                this.dataBind();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('pageSize', __ms);
            }
            return this;
        },
        pageSizeDirty: function (dirty) {
            var __start = new Date().getTime();
            if (dirty === undefined || dirty === null) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('pageSizeDirty', __ms);
                }
                return this._dirty;
            }
            this._dirty = dirty;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('pageSizeDirty', __ms);
            }
        },
        recordsForPage: function (p) {
            var __start = new Date().getTime();
            var d = [], si, ps, ei, i, c = 0;
            ps = this.pageSize();
            si = p * ps;
            ei = si + ps >= this._data.length ? this._data.length : si + ps;
            for (i = si; i < ei; i++) {
                d[c++] = this._data[i];
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('recordsForPage', __ms);
            }
            return d;
        },
        tableToObject: function (tableDOM) {
            var __start = new Date().getTime();
            try {
                var rows = $(tableDOM).children('tbody').children(), len, data, i, j;
                len = rows.length > 0 ? rows[0].cells.length : 0;
                data = [];
                for (i = 0; i < rows.length; i++) {
                    data[i] = [];
                    for (j = 0; j < len; j++) {
                        data[i][j] = rows[i].cells[j].innerHTML;
                    }
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('tableToObject', __ms);
                }
                return data;
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTableNoSchema + e.message);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('tableToObject', __ms);
            }
        },
        _validateTable: function (obj) {
            var __start = new Date().getTime();
            if (obj.length === 0) {
                throw new Error($.ig.DataSourceLocale.locale.errorTableWithIdNotFound + this.dataSource());
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_validateTable', __ms);
                }
                return obj[0];
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_validateTable', __ms);
            }
        },
        stringToJSONObject: function (s) {
            var __start = new Date().getTime();
            var data = {};
            try {
                data = JSON.parse(s);
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingJsonNoSchema + e.message);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('stringToJSONObject', __ms);
            }
            return data;
        },
        stringToXmlObject: function (s) {
            var __start = new Date().getTime();
            var doc, parser;
            try {
                if (window.ActiveXObject) {
                    doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = 'false';
                    doc.loadXML(s);
                } else {
                    parser = new DOMParser();
                    doc = parser.parseFromString(s, 'text/xml');
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingXmlNoSchema + e.message);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('stringToXmlObject', __ms);
            }
            return doc;
        }
    });
    $.ig.TypeParser = $.ig.TypeParser || Class.extend({
        toStr: function (obj) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('toStr', __ms);
            }
            return this.isNullOrUndefined(obj) ? '' : obj + this.empty();
        },
        toDate: function (obj, pk, key) {
            var __start = new Date().getTime();
            if (this.isNullOrUndefined(obj) || obj === '' || $.type(obj) === 'function') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('toDate', __ms);
                }
                return null;
            }
            if ($.type(obj) === 'date') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('toDate', __ms);
                }
                return obj;
            }
            if (obj.length && obj.indexOf('/Date(') !== -1) {
                if (this._serverOffsets === undefined || this._serverOffsets[pk] === undefined) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('toDate', __ms);
                    }
                    return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10) + this._serverOffset);
                }
                if (this._serverOffsets[pk][key] !== undefined && this._serverOffsets[pk][key] !== null) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('toDate', __ms);
                    }
                    return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10) + this._serverOffsets[pk][key]);
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('toDate', __ms);
                }
                return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10));
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('toDate', __ms);
            }
            return new Date(obj);
        },
        toNumber: function (obj) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('toNumber', __ms);
            }
            return this.isNullOrUndefined(obj) || $.type(obj) === 'function' ? null : obj * this.num();
        },
        toBool: function (obj) {
            var __start = new Date().getTime();
            var typeObj = $.type(obj);
            if (typeObj === 'boolean') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('toBool', __ms);
                }
                return obj;
            }
            if (this.isNullOrUndefined(obj) || typeObj === 'function') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('toBool', __ms);
                }
                return false;
            }
            if (obj === '1' || obj === 1 || typeObj === 'string' && obj.toLowerCase() === 'true') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('toBool', __ms);
                }
                return true;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('toBool', __ms);
            }
            return false;
        },
        isNullOrUndefined: function (obj) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('isNullOrUndefined', __ms);
            }
            return obj === null || obj === undefined;
        },
        empty: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('empty', __ms);
            }
            return '';
        },
        num: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('num', __ms);
            }
            return 1;
        }
    });
    $.ig.DataSchema = $.ig.DataSchema || Class.extend({
        schema: {
            fields: [],
            searchField: null,
            outputResultsName: null
        },
        init: function (type, options) {
            var __start = new Date().getTime();
            if (options) {
                this.schema = $.extend(true, {}, $.ig.DataSchema.prototype.schema, options);
            }
            this._type = type;
            this._parser = new $.ig.TypeParser();
            this._parser._serverOffset = 0;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        transform: function (data) {
            var __start = new Date().getTime();
            var ndata = [];
            switch (this._type) {
            case 'array':
                ndata = this._arrays(data);
                break;
            case 'json':
                ndata = this._json(data);
                break;
            case 'xml':
                ndata = this._xml(data);
                break;
            case 'htmlTableDom':
                ndata = this._table(data);
                break;
            case 'htmlListDom':
                ndata = this._list(data);
                break;
            default:
                throw new Error('unknown data source type: ' + this._type);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('transform', __ms);
            }
            return ndata;
        },
        _setResKey: function (resKey, out) {
            var __start = new Date().getTime();
            if (!this.isEmpty(resKey)) {
                out[resKey] = [];
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_setResKey', __ms);
                }
                return out[resKey];
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setResKey', __ms);
            }
            return out;
        },
        _convertType: function (t, obj, pk, key) {
            var __start = new Date().getTime();
            if (t === 'string') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_convertType', __ms);
                }
                return this._parser.toStr(obj);
            }
            if (t === 'date') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_convertType', __ms);
                }
                return this._parser.toDate(obj, pk, key);
            }
            if (t === 'number') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_convertType', __ms);
                }
                return this._parser.toNumber(obj);
            }
            if (t === 'boolean' || t === 'bool') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_convertType', __ms);
                }
                return this._parser.toBool(obj);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_convertType', __ms);
            }
            return obj;
        },
        _val: function (field, val, results, i, rec) {
            var __start = new Date().getTime();
            var t = field.type, j = null;
            if (!this.isEmpty(t)) {
                if (this.isEmpty(field.name)) {
                    results[i][j] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name);
                } else {
                    results[i][field.name] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name);
                }
            } else {
                if (this.isEmpty(field.name)) {
                    if (rec) {
                        results[i][j] = rec[i][j];
                    } else {
                        results[i][j] = val;
                    }
                } else {
                    if (rec) {
                        results[i][field.name] = rec[i][field.name];
                    } else {
                        results[i][field.name] = val;
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_val', __ms);
            }
        },
        isEmpty: function (o) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('isEmpty', __ms);
            }
            return o === undefined || o === null || o === '';
        },
        _arrays: function (data) {
            var __start = new Date().getTime();
            var i, j, tmp, hasArrays, resKey = this.schema.outputResultsName, out = {}, results;
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results) && $.type(results) !== 'array') {
                results = [];
                out = results;
            }
            try {
                if (data.length > 0) {
                    hasArrays = $.type(data[0]) === 'array';
                }
                for (i = 0; i < data.length; i++) {
                    if (data[i] === undefined) {
                        continue;
                    }
                    results.push({});
                    for (j = 0; j < this.schema.fields.length; j++) {
                        if (hasArrays) {
                            tmp = data[i][j];
                        } else {
                            tmp = data[i][this.schema.fields[j].name];
                        }
                        this._val(this.schema.fields[j], tmp, results, results.length - 1);
                    }
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingArrays + e.message);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_arrays', __ms);
            }
            return out;
        },
        _json: function (data) {
            var __start = new Date().getTime();
            var i, j, root, resKey = this.schema.outputResultsName, out = {}, results, pkObj = {};
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results)) {
                results = [];
                out = results;
            }
            try {
                if (data.Metadata && data.Metadata.timezoneOffset !== undefined && !isNaN(data.Metadata.timezoneOffset)) {
                    this._serverOffset = data.Metadata.timezoneOffset;
                    this._parser._serverOffset = this._serverOffset;
                    if (data.Metadata.timezoneOffsets) {
                        this._serverOffsets = data.Metadata.timezoneOffsets;
                        this._parser._serverOffsets = data.Metadata.timezoneOffsets;
                    }
                } else {
                    this._parser._serverOffset = 0;
                }
                if (!this.isEmpty(this.schema.searchField)) {
                    root = eval('data.' + this.schema.searchField);
                    if (!root && $.type(data) === 'array') {
                        root = data;
                    }
                }
                if (root === undefined || this.isEmpty(this.schema.searchField)) {
                    root = data;
                }
                if (!root.length && $.type(root) === 'object') {
                    root = [root];
                }
                if (root && root.length && root.length > 0) {
                    if (this._pk) {
                        for (j = 0; j < this.schema.fields.length; j++) {
                            if (this.schema.fields[j].name === this._pk) {
                                pkObj = this.schema.fields[j];
                                break;
                            }
                        }
                    }
                    for (i = 0; i < root.length; i++) {
                        results[i] = {};
                        if (this._pk) {
                            this._val(pkObj, root[i][pkObj.name], results, i, root);
                        }
                        for (j = 0; j < this.schema.fields.length; j++) {
                            if (this.schema.fields[j].name !== 'ig_pk' && this.schema.fields[j].name !== this._pk) {
                                if (root[i][this.schema.fields[j].name] === undefined) {
                                    throw new Error($.ig.DataSourceLocale.locale.errorSchemaMismatch + this.schema.fields[j].name);
                                }
                                this._val(this.schema.fields[j], root[i][this.schema.fields[j].name], results, i, root);
                            }
                        }
                    }
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingJson + e.message);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_json', __ms);
            }
            return out;
        },
        _xml: function (data, recursiveSF) {
            var __start = new Date().getTime();
            var i, j, root, resNode, item, resKey = this.schema.outputResultsName, out = {}, results, namespaced, sf, k, r, rc, len1, len2, o, carrysf, ireal = 0, s;
            o = window.ActiveXObject;
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results)) {
                results = [];
                out = results;
            }
            try {
                if (!this.isEmpty(this.schema.searchField)) {
                    namespaced = this._xmlHasNamespaces(data);
                    if (!namespaced) {
                        if (window.ActiveXObject === undefined) {
                            if (!recursiveSF || recursiveSF.length <= 0) {
                                root = data.evaluate(this.schema.searchField, data, null, XPathResult.ANY_TYPE, null);
                            } else {
                                root = data.evaluate(recursiveSF, data, null, XPathResult.ANY_TYPE, null);
                            }
                        } else {
                            if (!(data instanceof ActiveXObject)) {
                                s = new XMLSerializer().serializeToString(data);
                                data = new window.ActiveXObject('Microsoft.XMLDOM');
                                data.async = false;
                                data.loadXML(s);
                            }
                            root = data.selectNodes(this.schema.searchField);
                        }
                    } else {
                        if (this.schema.searchField.startsWith('//')) {
                            sf = this.schema.searchField.substring(2, this.schema.searchField.length);
                        } else {
                            sf = this.schema.searchField;
                        }
                        root = this._findXmlRecordsRoot(data, sf);
                    }
                } else {
                    root = data;
                }
                if (!namespaced) {
                    if (root && window.ActiveXObject !== undefined) {
                        for (i = 0; i < root.length; i++) {
                            item = root.item(i);
                            results[i] = {};
                            for (j = 0; j < this.schema.fields.length; j++) {
                                resNode = item.selectSingleNode(this.schema.fields[j].xpath);
                                if (resNode) {
                                    if (resNode.nodeType === 1 && this.schema.childDataProperty && resNode.nodeName === this.schema.childDataProperty) {
                                        this.schema.searchField = this.schema.childDataProperty;
                                        results[i][resNode.nodeName] = this._xml(item);
                                    } else {
                                        this._val(this.schema.fields[j], resNode.text, results, i);
                                    }
                                } else {
                                    results[i][this.schema.fields[j].name] = '';
                                }
                            }
                        }
                    } else if (root) {
                        i = 0;
                        item = root.iterateNext();
                        while (item) {
                            results[i] = {};
                            for (j = 0; j < this.schema.fields.length; j++) {
                                resNode = data.evaluate(this.schema.fields[j].xpath, item, null, XPathResult.ANY_TYPE, null).iterateNext();
                                if (resNode) {
                                    if (resNode.nodeType === 1 && this.schema.childDataProperty && (resNode.nodeName === this.schema.childDataProperty || resNode.nodeName === this.schema.seachField)) {
                                        if (!recursiveSF || recursiveSF.length <= 0) {
                                            carrysf = this.schema.searchField + '[' + (i + 1) + ']/' + this.schema.childDataProperty;
                                        } else {
                                            carrysf = recursiveSF + '[' + (i + 1) + ']/' + this.schema.childDataProperty;
                                        }
                                        results[i][this.schema.childDataProperty] = this._xml(data, carrysf);
                                    } else {
                                        this._val(this.schema.fields[j], resNode.textContent, results, i);
                                    }
                                } else {
                                    results[i][this.schema.fields[j].name] = '';
                                }
                            }
                            i++;
                            item = root.iterateNext();
                        }
                    }
                } else {
                    len1 = root.childNodes.length;
                    ireal = 0;
                    for (i = 0; i < len1; i++) {
                        r = root.childNodes[i];
                        results.push({});
                        for (j = 0; j < this.schema.fields.length; j++) {
                            len2 = r.childNodes.length;
                            for (k = 0; k < len2; k++) {
                                rc = r.childNodes[k];
                                if (this.schema.fields[j].name === (o === undefined ? rc.localName : rc.baseName)) {
                                    this._val(this.schema.fields[j], o === undefined ? rc.textContent : rc.text, results, ireal);
                                    break;
                                }
                            }
                        }
                        if ($.isEmptyObject(results[ireal])) {
                            results.pop();
                        } else {
                            ireal++;
                        }
                    }
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingXml + e.message);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_xml', __ms);
            }
            return out;
        },
        _findXmlRecordsRoot: function (data, field) {
            var __start = new Date().getTime();
            var i, len, r, o, ret;
            o = window.ActiveXObject;
            if ((o === undefined ? data.localName : data.baseName) === field) {
                ret = data.parentNode;
            } else if (data && data.childNodes && data.childNodes.length > 0) {
                len = data.childNodes.length;
                for (i = 0; i < len; i++) {
                    r = data.childNodes[i];
                    if (r.childNodes && r.childNodes.length > 0) {
                        ret = this._findXmlRecordsRoot(r, field);
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_findXmlRecordsRoot', __ms);
            }
            return ret;
        },
        _xmlHasNamespaces: function (data) {
            var __start = new Date().getTime();
            var i, ns, r, len, fc;
            if (data.childNodes && data.childNodes.length && data.childNodes.length > 0) {
                len = data.childNodes.length;
                for (i = 0; i < len; i++) {
                    r = data.childNodes[i];
                    if (!r) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('_xmlHasNamespaces', __ms);
                        }
                        return false;
                    }
                    ns = r.namespaceURI;
                    if (ns !== '' && ns !== undefined && ns !== null) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('_xmlHasNamespaces', __ms);
                        }
                        return true;
                    }
                }
                if (r && r.childNodes && r.childNodes.length > 0) {
                    fc = r.childNodes[0];
                    if (!fc) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('_xmlHasNamespaces', __ms);
                        }
                        return false;
                    }
                    ns = fc.namespaceURI;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_xmlHasNamespaces', __ms);
                    }
                    return ns !== '' && ns !== undefined && ns !== null;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_xmlHasNamespaces', __ms);
            }
            return false;
        },
        _table: function (data) {
            var __start = new Date().getTime();
            var i, j, r, tbody, rows, resKey = this.schema.outputResultsName, out = {}, results;
            tbody = $(data).find('tbody')[0];
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results)) {
                results = [];
                out = results;
            }
            try {
                if (tbody && tbody.nodeName && tbody.nodeName === 'TBODY') {
                    rows = tbody.rows;
                    for (i = 0; i < rows.length; i++) {
                        r = rows[i];
                        results[i] = {};
                        for (j = 0; j < this.schema.fields.length; j++) {
                            this._val(this.schema.fields[j], r.cells[j].innerHTML, results, i);
                        }
                    }
                } else {
                    throw new Error($.ig.DataSourceLocale.locale.errorExpectedTbodyParameter);
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTable + e.message);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_table', __ms);
            }
            return out;
        },
        _list: function (data) {
            var __start = new Date().getTime();
            var parsedData, img, anchor, id, li, ul, self = this, d = $(data), text, i, header, descriptions, counts, jqmNS = 'data-';
            if ($.mobile && $.mobile.ns) {
                jqmNS += $.mobile.ns;
            }
            parsedData = [];
            if (d && (d.is('ul') || d.is('ol')) && d.children().length > 0) {
                d.children('li:not([' + jqmNS + 'role="itemTemplate"], [' + jqmNS + 'role="detailsTemplate"], [' + jqmNS + 'role="dividerTemplate"])').each(function (index) {
                    var __start = new Date().getTime();
                    li = $(this);
                    img = li.children('img');
                    parsedData[index] = {};
                    if (self.schema.hasOwnProperty('primaryKey')) {
                        self._val(self.schema.primaryKey, li.index(), parsedData, index);
                    }
                    if (self.schema.hasOwnProperty('isDivider')) {
                        self._val(self.schema.isDivider, li.attr(jqmNS + 'role') === 'list-divider', parsedData, index);
                    }
                    if (img.length > 0 && img.attr('src')) {
                        if (self.schema.hasOwnProperty('imageUrl')) {
                            self._val(self.schema.imageUrl, img.attr('src'), parsedData, index);
                        }
                    }
                    anchor = li.children('a');
                    if (anchor.length > 0) {
                        text = anchor.html();
                        if (anchor.attr('href')) {
                            if (self.schema.hasOwnProperty('navigateUrl')) {
                                self._val(self.schema.navigateUrl, anchor.attr('href'), parsedData, index);
                            }
                        }
                        if (anchor.attr('target')) {
                            if (self.schema.hasOwnProperty('target')) {
                                self._val(self.schema.target, anchor.attr('target'), parsedData, index);
                            }
                        }
                        if (img.length === 0) {
                            img = anchor.children('img');
                            if (img.length > 0) {
                                img.each(function () {
                                    var __start = new Date().getTime();
                                    if (this.outerHTML) {
                                        text = text.replace(this.outerHTML, '');
                                    } else {
                                        text = text.replace($('<div>').append(this).html(), '');
                                    }
                                    {
                                        var __ms = new Date().getTime() - __start;
                                        _putstat('anonymous', __ms);
                                    }
                                });
                            }
                            if (img.length > 0 && img.attr('src')) {
                                if (self.schema.hasOwnProperty('imageUrl')) {
                                    self._val(self.schema.imageUrl, img.attr('src'), parsedData, index);
                                }
                            }
                        }
                    } else {
                        text = '';
                        for (i = 0; i < li[0].childNodes.length; i++) {
                            if (li[0].childNodes[i].nodeType === 3 && li[0].childNodes[i].data) {
                                text += $.trim(li[0].childNodes[i].data);
                            }
                        }
                    }
                    if (self.schema.hasOwnProperty('header')) {
                        header = li.children('h1, h2, h3, h4, h5, h6');
                        if (header.length === 0 && anchor.length > 0) {
                            header = anchor.children('h1, h2, h3, h4, h5, h6');
                        }
                        if (header.length > 0) {
                            self._val(self.schema.header, header.text(), parsedData, index);
                            header.each(function () {
                                var __start = new Date().getTime();
                                if (this.outerHTML) {
                                    text = text.replace(this.outerHTML, '');
                                } else {
                                    text = text.replace($('<div>').append(this).html(), '');
                                }
                                {
                                    var __ms = new Date().getTime() - __start;
                                    _putstat('anonymous', __ms);
                                }
                            });
                        }
                    }
                    if (self.schema.hasOwnProperty('description')) {
                        descriptions = li.children('p, dd');
                        if (descriptions.length === 0 && anchor.length > 0) {
                            descriptions = anchor.children('p, dd');
                        }
                        if (descriptions.length > 0) {
                            self._val(self.schema.description, descriptions.text(), parsedData, index);
                            descriptions.each(function () {
                                var __start = new Date().getTime();
                                if (this.outerHTML) {
                                    text = text.replace(this.outerHTML, '');
                                } else {
                                    text = text.replace($('<div>').append(this).html(), '');
                                }
                                {
                                    var __ms = new Date().getTime() - __start;
                                    _putstat('anonymous', __ms);
                                }
                            });
                        }
                    }
                    if (self.schema.hasOwnProperty('count')) {
                        counts = li.children('span.ui-li-count');
                        if (counts.length === 0 && anchor.length > 0) {
                            counts = anchor.children('span.ui-li-count');
                        }
                        if (counts.length > 0) {
                            self._val(self.schema.count, parseInt(counts.text(), 10), parsedData, index);
                            counts.each(function () {
                                var __start = new Date().getTime();
                                if (this.outerHTML) {
                                    text = text.replace(this.outerHTML, '');
                                } else {
                                    text = text.replace($('<div>').append(this).html(), '');
                                }
                                {
                                    var __ms = new Date().getTime() - __start;
                                    _putstat('anonymous', __ms);
                                }
                            });
                        }
                    }
                    if (self.schema.hasOwnProperty('text')) {
                        self._val(self.schema.text, text, parsedData, index);
                    }
                    id = li.attr('id');
                    if (id) {
                        if (self.schema.hasOwnProperty('value')) {
                            self._val(self.schema.value, id, parsedData, index);
                        }
                    }
                    ul = li.children('ul, ol');
                    if (ul.length > 0) {
                        if (self.schema.hasOwnProperty('childData') && self.schema.childData.hasOwnProperty('name')) {
                            parsedData[index][self.schema.childData.name] = self._list(ul);
                        }
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                });
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_list', __ms);
            }
            return parsedData;
        },
        isObjEmpty: function (obj) {
            var __start = new Date().getTime();
            var prop;
            for (prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('isObjEmpty', __ms);
                    }
                    return false;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('isObjEmpty', __ms);
            }
            return true;
        },
        fields: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('fields', __ms);
            }
            return this.schema.fields;
        }
    });
    $.ig.RemoteDataSource = $.ig.RemoteDataSource || $.ig.DataSource.extend({
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.type = 'remoteUrl';
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        }
    });
    $.ig.JSONDataSource = $.ig.JSONDataSource || $.ig.DataSource.extend({
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.type = 'json';
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        }
    });
    $.ig.RESTDataSource = $.ig.RESTDataSource || $.ig.DataSource.extend({
        settings: {
            restSettings: {
                create: {
                    url: null,
                    template: null,
                    batch: false
                },
                update: {
                    url: null,
                    template: null,
                    batch: false
                },
                remove: {
                    url: null,
                    template: null,
                    batch: false
                },
                encodeRemoveInRequestUri: true,
                contentSerializer: null,
                contentType: 'application/json; charset=utf-8'
            }
        },
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.restSettings = $.extend(true, this.settings.restSettings, options.restSettings);
            this._createHttpHandlers();
            this._createLogVerbMapping();
            this._setLazyUrls();
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        },
        saveChanges: function () {
            var __start = new Date().getTime();
            var log, verb, batchOps = {
                    POST: [],
                    PUT: [],
                    DELETE: [],
                    CELL: []
                }, i;
            this._asyncCallbackCount = 0;
            for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                log = this._accumulatedTransactionLog[i];
                verb = this._logVerbMap[log.type];
                if (log.type === 'cell') {
                    batchOps.CELL.push(log);
                } else if (this._isBatch(verb) === true) {
                    batchOps[verb].push(log);
                } else {
                    this._asyncCallbackCount++;
                    this._saveSingleChange(verb, log);
                }
            }
            if (batchOps.CELL.length > 0) {
                this._saveAllCellChanges(batchOps.CELL);
            }
            if (batchOps.POST.length > 0) {
                this._asyncCallbackCount++;
                this._saveAllCreateChanges(batchOps.POST);
            }
            if (batchOps.PUT.length > 0) {
                this._asyncCallbackCount++;
                this._saveAllUpdateChanges(batchOps.PUT);
            }
            if (batchOps.DELETE.length > 0) {
                this._asyncCallbackCount++;
                this._saveAllDeleteChanges(batchOps.DELETE);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('saveChanges', __ms);
            }
        },
        _saveSingleChange: function (verb, change) {
            var __start = new Date().getTime();
            var data, url;
            data = verb === 'POST' || verb === 'PUT' ? change.row : null;
            url = this._getProperUrl(verb, false, verb === 'DELETE' || verb === 'PUT' ? change.rowId : undefined);
            this._call(verb, url, data);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_saveSingleChange', __ms);
            }
        },
        _saveAllCellChanges: function (cellLogs) {
            var __start = new Date().getTime();
            var i, combined = {}, rowLogs = [], cl;
            for (i = 0; i < cellLogs.length; i++) {
                cl = cellLogs[i];
                if (combined[cl.rowId] === undefined) {
                    combined[cl.rowId] = {};
                    combined[cl.rowId].row = this.findRecordByKey(cl.rowId);
                }
                combined[cl.rowId].row[cl.col] = cl.value;
            }
            $.each(combined, function (key, value) {
                var __start = new Date().getTime();
                value.rowId = key;
                rowLogs.push(value);
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            });
            if (this._isBatch('PUT') === true) {
                this._asyncCallbackCount++;
                this._saveAllUpdateChanges(rowLogs);
            } else {
                for (i = 0; i < rowLogs.length; i++) {
                    this._asyncCallbackCount++;
                    this._saveSingleChange('PUT', rowLogs[i]);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_saveAllCellChanges', __ms);
            }
        },
        _saveAllCreateChanges: function (createLogs) {
            var __start = new Date().getTime();
            var data = [], i;
            for (i = 0; i < createLogs.length; i++) {
                data.push(createLogs[i].row);
            }
            this._call('POST', this._getProperUrl('POST', true), data);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_saveAllCreateChanges', __ms);
            }
        },
        _saveAllUpdateChanges: function (updateLogs) {
            var __start = new Date().getTime();
            var data = [], urlParams = '?', i;
            for (i = 0; i < updateLogs.length; i++) {
                data.push(updateLogs[i].row);
                urlParams += 'index=' + updateLogs[i].rowId + (i !== updateLogs.length - 1 ? '&' : '');
            }
            this._call('PUT', this._getProperUrl('PUT', true) + urlParams, data);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_saveAllUpdateChanges', __ms);
            }
        },
        _saveAllDeleteChanges: function (deleteLogs) {
            var __start = new Date().getTime();
            var urlParams = '', i, data = null;
            if (this.settings.restSettings.encodeRemoveInRequestUri === true) {
                urlParams = '?';
                for (i = 0; i < deleteLogs.length; i++) {
                    urlParams += 'index=' + deleteLogs[i].rowId + (i !== deleteLogs.length - 1 ? '&' : '');
                }
            } else {
                data = [];
                for (i = 0; i < deleteLogs.length; i++) {
                    data.push(deleteLogs[i].rowId);
                }
            }
            this._call('DELETE', this._getProperUrl('DELETE', true) + urlParams, data);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_saveAllDeleteChanges', __ms);
            }
        },
        _createHttpHandlers: function () {
            var __start = new Date().getTime();
            this._okHandler = $.proxy(this._responseOk, this);
            this._createdHandler = $.proxy(this._responseCreated, this);
            this._noContentHandler = $.proxy(this._responseNoContent, this);
            this._httpHandlers = {
                POST: { 201: this._createdHandler },
                PUT: {
                    200: this._okHandler,
                    201: this._createdHandler,
                    204: this._noContentHandler
                },
                DELETE: {
                    200: this._okHandler,
                    204: this._noContentHandler
                }
            };
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createHttpHandlers', __ms);
            }
        },
        _createLogVerbMapping: function () {
            var __start = new Date().getTime();
            this._logVerbMap = {
                newrow: 'POST',
                row: 'PUT',
                deleterow: 'DELETE',
                cell: 'PUT'
            };
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createLogVerbMapping', __ms);
            }
        },
        _setLazyUrls: function () {
            var __start = new Date().getTime();
            var rs = this.settings.restSettings, tempUrl = null, tempTmpl = null;
            $.each(rs, function (key, value) {
                var __start = new Date().getTime();
                if (value) {
                    if (value.url) {
                        tempUrl = value.url;
                    }
                    if (value.template) {
                        tempTmpl = value.template;
                    }
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            });
            $.each(rs, function (key, value) {
                var __start = new Date().getTime();
                if (value) {
                    if (value.url !== undefined && value.url === null) {
                        value.url = tempUrl;
                    }
                    if (value.template !== undefined && value.template === null) {
                        value.template = tempTmpl;
                    }
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            });
            this._putUrl = rs.update.url;
            this._putTmpl = rs.update.template;
            this._postUrl = rs.create.url;
            this._postTmpl = rs.create.template;
            this._deleteUrl = rs.remove.url;
            this._deleteTmpl = rs.remove.template;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setLazyUrls', __ms);
            }
        },
        _getProperUrl: function (verb, batch, id) {
            var __start = new Date().getTime();
            var vL = verb.toLowerCase(), url = this['_' + vL + 'Url'];
            if (url && url.length > 0 && url.substr(url.length - 1) !== '/') {
                url += '/';
            }
            if (!batch || batch === false) {
                if (this['_' + vL + 'Tmpl'] !== null) {
                    url = this['_' + vL + 'Tmpl'];
                    if (id) {
                        url = url.replace('${id}', id);
                    }
                } else {
                    if (id) {
                        url += id;
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_getProperUrl', __ms);
            }
            return url;
        },
        _responseOk: function (data, textStatus, jqXHR) {
            var __start = new Date().getTime();
            this._asyncCallbackCount--;
            if (this._asyncCallbackCount === 0) {
                this._saveChangesSuccess({ Success: textStatus === 'success' }, textStatus, jqXHR);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_responseOk', __ms);
            }
        },
        _responseCreated: function (data, textStatus, jqXHR) {
            var __start = new Date().getTime();
            this._asyncCallbackCount--;
            if (this._asyncCallbackCount === 0) {
                this._saveChangesSuccess({ Success: textStatus === 'success' }, textStatus, jqXHR);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_responseCreated', __ms);
            }
        },
        _responseNoContent: function (data, textStatus, jqXHR) {
            var __start = new Date().getTime();
            this._asyncCallbackCount--;
            if (this._asyncCallbackCount === 0) {
                this._saveChangesSuccess({ Success: textStatus === 'success' || textStatus === 'nocontent' }, textStatus, jqXHR);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_responseNoContent', __ms);
            }
        },
        _isBatch: function (verb) {
            var __start = new Date().getTime();
            switch (verb) {
            case 'POST':
                return this.settings.restSettings.create.batch;
            case 'PUT':
                return this.settings.restSettings.update.batch;
            case 'DELETE':
                return this.settings.restSettings.remove.batch;
            default:
                return false;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_isBatch', __ms);
            }
        },
        _call: function (verb, url, data) {
            var __start = new Date().getTime();
            var dataString, ct = this.settings.restSettings.contentType, serializer = this.settings.restSettings.contentSerializer;
            if (serializer !== null) {
                if (typeof serializer === 'string') {
                    serializer = window[serializer];
                }
            }
            if (data !== null) {
                dataString = serializer !== null ? serializer(data) : JSON.stringify(data);
            } else {
                ct = 'text/plain';
                dataString = '';
            }
            $.ajax({
                type: verb,
                url: url,
                data: dataString,
                statusCode: this._httpHandlers[verb],
                contentType: ct,
                cache: false,
                processData: true
            });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_call', __ms);
            }
        }
    });
    $.ig.JSONPDataSource = $.ig.JSONPDataSource || $.ig.DataSource.extend({
        settings: {
            jsonp: null,
            jsonpCallback: null
        },
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.responseDataType = 'jsonp';
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        }
    });
    $.ig.XmlDataSource = $.ig.XmlDataSource || $.ig.DataSource.extend({
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.type = 'xml';
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        }
    });
    $.ig.FunctionDataSource = $.ig.FunctionDataSource || $.ig.DataSource.extend({
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.type = 'function';
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        }
    });
    $.ig.HtmlTableDataSource = $.ig.HtmlTableDataSource || $.ig.DataSource.extend({
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.type = 'htmlTableDom';
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        }
    });
    $.ig.ArrayDataSource = $.ig.ArrayDataSource || $.ig.DataSource.extend({
        init: function (options) {
            var __start = new Date().getTime();
            if (!options) {
                options = {};
            }
            options.type = 'array';
            this._super(options);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        }
    });
    $.ig.MashupDataSource = $.ig.MashupDataSource || $.ig.DataSource.extend({
        mashupSettings: {
            ignorePartialRecords: false,
            dataSource: []
        },
        init: function (options) {
            var __start = new Date().getTime();
            this._super(options);
            if (options) {
                this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
                this.settings = $.extend(true, {}, $.ig.MashupDataSource.prototype.mashupSettings, this.settings);
            }
            this._sources = [];
            this._dataBindingComplete = false;
            this._sourcesStatus = [];
            this._hashedDataViews = [];
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
            return this;
        },
        _checkDataBindingComplete: function (status, msg, ownerDs) {
            var __start = new Date().getTime();
            var i, j, k, hasPrimaryKeys = true, totalLength = 0, data = [], merged = [], d, rindex, keyVal, prop, keyIndexHash;
            this._dataBindingComplete = true;
            for (i = 0; i < this._sources.length; i++) {
                if (this._sources[i] === ownerDs) {
                    this._sourcesStatus[i] = 1;
                }
                if (this._sourcesStatus[i] === 0) {
                    this._dataBindingComplete = false;
                }
            }
            if (this._dataBindingComplete) {
                for (i = 0; i < this._sources.length; i++) {
                    if (this._sources[i].settings.primaryKey === '' || this._sources[i].settings.primaryKey === null || this._sources[i].settings.primaryKey === undefined) {
                        hasPrimaryKeys = false;
                        break;
                    }
                }
                totalLength = this._sources[0].dataView().length;
                for (i = 0; i < this._sources.length; i++) {
                    totalLength = this.settings.ignorePartialRecords ? this._sources[i].dataView().length < totalLength ? this._sources[i].dataView().length : totalLength : this._sources[i].dataView().length > totalLength ? this._sources[i].dataView().length : totalLength;
                }
                if (hasPrimaryKeys) {
                    for (i = 0; i < this._sources.length; i++) {
                        this._hashedDataViews[i] = {};
                        for (j = 0; j < this._sources[i].dataView().length; j++) {
                            this._hashedDataViews[i][this._sources[i].dataView()[j][this._sources[i].settings.primaryKey]] = this._sources[i].dataView()[j];
                        }
                    }
                    keyIndexHash = {};
                    j = 0;
                    for (i = 0; i < this._hashedDataViews.length; i++) {
                        for (keyVal in this._hashedDataViews[i]) {
                            if (this._hashedDataViews[i].hasOwnProperty(keyVal)) {
                                if (keyIndexHash.hasOwnProperty(keyVal)) {
                                    data[keyIndexHash[keyVal]] = $.extend(true, {}, data[keyIndexHash[keyVal]], this._hashedDataViews[i][keyVal]);
                                    merged[keyIndexHash[keyVal]]++;
                                } else {
                                    data.push({});
                                    merged.push(1);
                                    data[j] = $.extend(true, {}, data[j], this._hashedDataViews[i][keyVal]);
                                    keyIndexHash[keyVal] = j;
                                    j++;
                                }
                            }
                        }
                    }
                    if (this.settings.ignorePartialRecords) {
                        for (i = merged.length - 1; i >= 0; i--) {
                            if (merged[i] < this._sources.length) {
                                data.splice(i, 1);
                            }
                        }
                    }
                } else {
                    for (i = 0; i < totalLength; i++) {
                        data[i] = {};
                        for (j = 0; j < this._sources.length; j++) {
                            d = this._sources[j];
                            if (d.dataView()[0].length) {
                                for (k = 0; k < d.dataView()[0].length; k++) {
                                    rindex += k;
                                    if (d.schema() && d.schema().fields().length > 0) {
                                        data[i][d.schema().fields()[k]] = i >= d.dataView().length ? '' : d.dataView()[i][d.schema().fields()[k]];
                                    } else {
                                        data[i][rindex] = i >= d.dataView().length ? '' : d.dataView()[i][k];
                                    }
                                }
                            } else {
                                for (prop in d.dataView()[i]) {
                                    if (d.dataView()[i].hasOwnProperty(prop)) {
                                        data[i][prop] = i >= d.dataView().length ? '' : d.dataView()[i][prop];
                                    }
                                }
                            }
                        }
                        rindex = 0;
                    }
                }
                this.settings.dataSource = data;
                this.settings.type = 'array';
                this._runtimeType = this.analyzeDataSource();
                this.dataBind();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_checkDataBindingComplete', __ms);
            }
        },
        dataBind: function () {
            var __start = new Date().getTime();
            var i, ds = this.settings.dataSource;
            if (this._dataBindingComplete) {
                this._dataBindingComplete = false;
                this._super();
            } else {
                this._dataBindingComplete = false;
                for (i = 0; i < ds.length; i++) {
                    if (ds[i] instanceof $.ig.DataSource) {
                        this._sources[i] = ds[i];
                    } else if (ds[i].hasOwnProperty('dataSource') && ds[i].dataSource instanceof $.ig.DataSource) {
                        this._sources[i] = ds[i].dataSource;
                    } else {
                        this._sources[i] = new $.ig.DataSource(ds[i]);
                    }
                    this._sources[i].settings.callee = this;
                    this._sources[i].settings.callback = this._checkDataBindingComplete;
                    this._sourcesStatus[i] = 0;
                }
                for (i = 0; i < ds.length; i++) {
                    this._sources[i].dataBind();
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('dataBind', __ms);
            }
            return this;
        }
    });
    $.ig.HierarchicalDataSource = $.ig.HierarchicalDataSource || Class.extend({
        settings: {
            autogenerate: false,
            initialDataBindDepth: 0,
            maxDataBindDepth: -1,
            defaultChildrenDataProperty: 'children',
            callback: null,
            callee: null,
            data: [],
            dataSource: null,
            dataBinding: null,
            dataBound: null,
            type: 'unknown',
            responseDataType: null,
            responseContentType: null,
            localSchemaTransform: true,
            urlParamsEncoding: null,
            urlParamsEncoded: null,
            requestType: 'GET',
            odata: false,
            paging: {},
            sorting: {},
            filtering: {},
            schema: []
        },
        init: function (options) {
            var __start = new Date().getTime();
            if (options) {
                this.__ds = options.dataSource;
                options.dataSource = null;
                this.settings = $.extend(true, {}, $.ig.HierarchicalDataSource.prototype.settings, options);
                this.settings.dataSource = this.__ds;
            }
            this._rootopts = this.settings;
            this._rootopts.urlParamsEncoded = $.proxy(this._encodeHierarchicalUrlParams, this);
            if (this._rootopts.dataSource instanceof $.ig.DataSource) {
                this._rootds = this._rootopts.dataSource;
                this._rootds.settings.urlParamsEncoded = this.settings.urlParamsEncoded;
                this._rootds.settings.odata = this.settings.odata;
                if (!this._rootds.settings.schema) {
                    this._rootds.settings.schema = {};
                }
                this._rootds.settings.schema.layouts = this.settings.schema.layouts;
            } else {
                if ($.type(this._rootopts.dataSource) === 'string' && this._rootopts.dataSource.indexOf('$callback=?') !== -1) {
                    this._rootds = new $.ig.JSONPDataSource(this._rootopts);
                } else if (this._rootopts.restSettings && (this._rootopts.restSettings.update.url !== null || this._rootopts.restSettings.update.template !== null || this._rootopts.restSettings.create.url !== null || this._rootopts.restSettings.create.template !== null || this._rootopts.restSettings.remove.url !== null || this._rootopts.restSettings.remove.template !== null)) {
                    this._rootds = new $.ig.RESTDataSource(this._rootopts);
                } else {
                    this._rootds = new $.ig.DataSource(this._rootopts);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        dataBind: function (callback, callee) {
            var __start = new Date().getTime();
            this._rootds.dataBind(callback, callee);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('dataBind', __ms);
            }
        },
        root: function () {
            var __start = new Date().getTime();
            if (!this._rootds) {
                this._rootds = new $.ig.DataSource(this._rootopts);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('root', __ms);
            }
            return this._rootds;
        },
        dataAt: function (path, keyspath) {
            var __start = new Date().getTime();
            var data = this.root().data(), paths = path.split('/'), kp = keyspath.split('/'), k, i, searchField = 'Records', j, cd = null, ckey = this.settings.primaryKey, ckeyval = '', ckeys = [], ckeyvals = [], match = false;
            for (i = 0; i < paths.length; i++) {
                ckey = paths[i].split(':')[0];
                ckeyval = paths[i].split(':')[1];
                if (paths[i] !== '') {
                    for (j = 0; data && j < data.length; j++) {
                        if (ckey && ckey.indexOf(',') !== -1) {
                            ckeys = ckey.split(',');
                            ckeyvals = ckeyval.split(',');
                            for (k = 0; k < ckeys.length; k++) {
                                if (!data[j][ckeys[k]].charAt && ckeyvals[k].charAt) {
                                    ckeyvals[k] = parseInt(ckeyvals[k], 10);
                                }
                                match = data[j][ckeys[k]] === ckeyvals[k];
                                if (!match) {
                                    break;
                                }
                            }
                        } else {
                            if (data[j][ckey] !== undefined && !data[j][ckey].charAt && ckeyval.charAt) {
                                ckeyval = parseInt(ckeyval, 10);
                            }
                            match = data[j][ckey] === ckeyval;
                        }
                        if (match) {
                            cd = data[j][kp[i]];
                            searchField = this.root().schema && this.root().schema() && this.root().schema().schema ? this.root().schema().schema.searchField : searchField;
                            if (cd && paths.length > 1 && i < paths.length - 1 && $.type(cd) !== 'array' && cd[searchField]) {
                                cd = cd[searchField];
                            }
                            break;
                        }
                    }
                    data = cd;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('dataAt', __ms);
            }
            return cd;
        },
        _encodeUrlPath: function (rowid, name) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodeUrlPath', __ms);
            }
            return 'path=' + rowid + '&layout=' + name;
        },
        _encodeHierarchicalUrlParams: function (owner, args) {
            var __start = new Date().getTime();
            var expand = '', layouts = this.settings.schema.layouts, i, j, tmp, name, lc = 0;
            if (this.settings.odata && this.settings.initialDataBindDepth !== 0) {
                i = j = 0;
                for (name in layouts) {
                    if (layouts.hasOwnProperty(name)) {
                        lc++;
                    }
                }
                lc++;
                for (name in layouts) {
                    if (layouts.hasOwnProperty(name)) {
                        if ($.type(layouts[name]) !== 'function') {
                            if (name.startsWith('/')) {
                                name = name.substring(1, name.length - 1);
                            }
                            tmp = name.split('/');
                            for (i = 0; i < tmp.length; i++) {
                                tmp[i] = tmp[i].substring(0, tmp[i].indexOf(':'));
                            }
                            tmp = tmp.join('/');
                            if (j !== 0 && j !== lc - 1) {
                                expand += ',';
                            }
                            expand += tmp;
                            j++;
                        }
                    }
                }
                args.selectParams.$expand = expand;
            } else {
                args.selectParams.dbdepth = this.settings.initialDataBindDepth;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_encodeHierarchicalUrlParams', __ms);
            }
        }
    });
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        define('ig.datasource', ['ig.util'], function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return $.ig.DataSource;
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.ig = $.ig || {};
    $.extend($.ig, {
        tmpl: function (template, data, args) {
            var __start = new Date().getTime();
            var tmpl = template, cacheConst;
            tmpl = tmpl.replace(this.regExp.lineBreak, '');
            tmpl = tmpl.replace(this.regExp.comment, '');
            if (typeof data === 'function') {
                if (args) {
                    data = data.apply(this, args);
                } else {
                    data = data.call();
                }
            }
            if (this._internalTmplCache && this._internalTmplCache.hasOwnProperty(tmpl)) {
                this.tokens = this._internalTmplCache[tmpl].tokens;
                this.args = this._internalTmplCache[tmpl].args;
                this.i = this._internalTmplCache[tmpl].i;
                this._hasBlock = this._internalTmplCache[tmpl]._hasBlock;
                tmpl = this._internalTmplCache[tmpl].tmpl;
            } else {
                this.tokens = [];
                this.args = [];
                this.i = 0;
                this._tokenizeTemplate(tmpl);
                cacheConst = tmpl;
                this._internalTmplCache[cacheConst] = {};
                this._internalTmplCache[cacheConst].tokens = this.tokens;
                if (this.regExp.block.test(tmpl)) {
                    this._hasBlock = true;
                    tmpl = this._tokenizeDirectives(tmpl);
                } else {
                    this._hasBlock = false;
                }
                this._internalTmplCache[cacheConst].args = this.args;
                this._internalTmplCache[cacheConst].i = this.i;
                this._internalTmplCache[cacheConst]._hasBlock = this._hasBlock;
                this._internalTmplCache[cacheConst].tmpl = tmpl;
            }
            if (!this.tokens) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('tmpl', __ms);
                }
                return tmpl;
            }
            if (this._hasBlock) {
                tmpl = this._compileTemplate(tmpl, data);
            } else {
                tmpl = this._populateTemplate(tmpl, data);
            }
            delete this.args;
            delete this.tokens;
            delete this._hasBlock;
            delete this.i;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('tmpl', __ms);
            }
            return tmpl;
        },
        clearTmplCache: function () {
            var __start = new Date().getTime();
            delete this._internalTmplCache;
            this._internalTmplCache = {};
            {
                var __ms = new Date().getTime() - __start;
                _putstat('clearTmplCache', __ms);
            }
        },
        encode: function (value) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('encode', __ms);
            }
            return value !== null && value !== undefined ? value.toString().replace(this.regExp.lt, '&lt;').replace(this.regExp.gt, '&gt;').replace(this.regExp.ap, '&#39;').replace(this.regExp.ic, '&#34;') : '';
        },
        regExp: {
            comment: /\s#[^#]*#/g,
            sub: /\$\{(([\w\$]+(\.|\s)?[\w\$]*)+)\}/,
            nonEncodeSub: /\{\{html\s+([\w\$]+(\.|\s)?[\w\$]*)+\}\}/,
            forSub: /\$\{(([\w\$]+\.[\w\$]*)+)\}/,
            arg: /args\[\d+\](?!.*\+)/,
            block: /\{\{(\w+).*?\}\}+(.*)(\{\{\/\1\}\})/,
            blockCont: /\{\{(?!\/)(\S+)(.*)\}\}(.*)/,
            blockDirective: /\{\{\S+.*?\}\}/,
            index: /\$i/g,
            lineBreak: /(\r\n|\n|\r)/gm,
            lt: /</g,
            gt: />/g,
            ap: /'/g,
            ic: /"/g
        },
        _directives: {
            'if': {
                start: 'if (',
                close: ') {',
                end: ' }'
            },
            elseif: {
                start: ' } else if (',
                close: ') {',
                end: ''
            },
            'else': {
                start: ' } else {',
                close: '',
                end: ''
            },
            each: {
                start: 'for (var i = 0; i < $data.length; i++) {',
                close: '',
                end: ' }'
            }
        },
        _internalTmplCache: {},
        _tokenizeTemplate: function (template) {
            var __start = new Date().getTime();
            var tempToken, splitName;
            if (this.regExp.sub.test(template)) {
                tempToken = this.regExp.sub.exec(template);
                while (tempToken !== null) {
                    splitName = tempToken[1].split('.');
                    template = template.replace(new RegExp('\\$\\{' + tempToken[1].replace(/\$/g, '\\$') + '\\}', 'g'), '');
                    tempToken[3] = new RegExp('\\$\\{' + tempToken[1].replace(/\$/g, '\\$') + '\\}', 'g');
                    tempToken[1] = splitName;
                    tempToken[2] = true;
                    this.tokens.push(tempToken);
                    tempToken = this.regExp.sub.exec(template);
                }
            }
            if (this.regExp.nonEncodeSub.test(template)) {
                tempToken = this.regExp.nonEncodeSub.exec(template);
                while (tempToken !== null) {
                    splitName = tempToken[1].split('.');
                    template = template.replace(new RegExp('\\{\\{html\\s+' + tempToken[1].replace(/\$/g, '\\$') + '\\}\\}', 'g'), '');
                    tempToken[3] = new RegExp('\\{\\{html\\s+' + tempToken[1].replace(/\$/g, '\\$') + '\\}\\}', 'g');
                    tempToken[1] = splitName;
                    tempToken[2] = false;
                    this.tokens.push(tempToken);
                    tempToken = this.regExp.nonEncodeSub.exec(template);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_tokenizeTemplate', __ms);
            }
        },
        _tokenizeDirectives: function (template) {
            var __start = new Date().getTime();
            var tmpl = 'var result = "";', tokens = this.regExp.block.exec(template), temp;
            if (template.indexOf(tokens[0]) > 0 || template.length !== tokens[0].length) {
                temp = template.split(tokens[0]);
                if (temp[0] && temp[0].length > 0) {
                    this.args.push(temp[0]);
                    tmpl += 'result += args[' + this.i++ + '];';
                }
            }
            tmpl += this._handleCompleteBlock(tokens);
            if (temp && temp.length > 0 && temp[1].length > 0) {
                this.args.push(temp[1]);
                tmpl += 'result += args[' + this.i++ + '];';
            }
            tmpl += 'return result;';
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_tokenizeDirectives', __ms);
            }
            return tmpl;
        },
        _handleCompleteBlock: function (tokens) {
            var __start = new Date().getTime();
            var tmpl = tokens[0], template = '', blocks = [], tempTokens = [], i, temp;
            tmpl = tmpl.replace('{{' + tokens[1], this._directives[tokens[1]].start);
            if (tokens[1] === 'each') {
                blocks.push(tokens[0].split(tokens[3]));
                blocks.push(tokens[2].split(tokens[3]));
                for (i = 0; i < blocks[1].length; i++) {
                    if (blocks[0][i].indexOf('{{each') > 0) {
                        temp = blocks[0][i].split('{{each')[0];
                        this.args.push(temp);
                        template += 'result += args[' + this.i++ + '];';
                        blocks[0][i] = blocks[0][i].substr(blocks[0][i].indexOf('{{each'));
                        temp = this.regExp.blockDirective.exec(blocks[1][i]);
                        blocks[1][i] = blocks[1][i].substr(blocks[1][i].indexOf(temp[0]) + temp[0].length);
                    }
                    blocks[0][i] = blocks[0][i].replace('{{' + tokens[1], this._directives[tokens[1]].start);
                    template += this._handleEach(blocks[0][i] + '{{/each}}', [
                        blocks[0][i] + '{{/each}}',
                        'each',
                        blocks[1][i],
                        '{{/each}}'
                    ]);
                }
            } else if (tokens[1] === 'if') {
                template += this._handleIfElse(tmpl, tokens);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_handleCompleteBlock', __ms);
            }
            return template;
        },
        _handleEach: function (template, tokens) {
            var __start = new Date().getTime();
            var tmpl = template, eachVar, body, forSub, sub, expr, inner;
            eachVar = this.regExp.sub.exec(tmpl);
            tmpl = tmpl.replace(eachVar[0], '');
            tmpl = tmpl.replace('$data', eachVar[0]);
            body = tokens[2];
            if (/\$data/.test(body)) {
                body = body.replace(/\$data/g, '" + ' + eachVar[0] + '[i] + "');
                this.args.push(eachVar[0]);
                this.i++;
            }
            forSub = this.regExp.forSub.exec(body);
            while (forSub) {
                body = body.replace(new RegExp('\\$\\{' + forSub[1] + '\\}', 'g'), '" + ' + eachVar[0] + '[i]' + forSub[1].substr(forSub[1].indexOf('.')) + ' + "');
                forSub = this.regExp.forSub.exec(body);
            }
            body = body.replace(/\$index/g, '" + i + "');
            tmpl = tmpl.replace(tokens[2], 'result += "' + body + '"');
            tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
            tmpl = tmpl.replace(tokens[3], this._directives[tokens[1]].end);
            if (this.regExp.block.test(tmpl)) {
                inner = this.regExp.block.exec(tmpl);
                tmpl = tmpl.replace(inner[0], this._handleCompleteBlock(inner));
            }
            sub = this.regExp.sub.exec(tmpl);
            while (sub) {
                expr = new RegExp('\\$\\{' + sub[1] + '\\}', 'g');
                tmpl = tmpl.replace(expr, 'args[' + this.i++ + ']');
                this.args.push(sub[0]);
                sub = this.regExp.sub.exec(tmpl);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_handleEach', __ms);
            }
            return tmpl;
        },
        _handleIfElse: function (template, tokens) {
            var __start = new Date().getTime();
            var tmpl = template, i = 0, htmlStrings, sub, inner, index, tmplArr = [];
            tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
            index = tmpl.lastIndexOf(tokens[3]);
            tmpl = tmpl.substr(0, index) + tmpl.slice(index + tokens[3].length - 1);
            if (this.regExp.block.test(tmpl)) {
                inner = this.regExp.block.exec(tmpl);
                tmpl = tmpl.replace(inner[0], this._handleCompleteBlock(inner));
            }
            htmlStrings = tokens[2].split(this.regExp.blockDirective);
            tmplArr.push(tmpl.slice(0, tmpl.indexOf(') {') + 3));
            tmplArr.push(tmpl.slice(tmpl.indexOf(') {') + 3));
            for (i; i < htmlStrings.length; i++) {
                if (htmlStrings[i] && htmlStrings[i].length && htmlStrings[i].length > 0) {
                    tmplArr[1] = tmplArr[1].replace(htmlStrings[i], 'result += args[' + this.i++ + '];');
                    this.args.push(htmlStrings[i]);
                }
            }
            tmpl = tmplArr.join('');
            tokens = this.regExp.blockCont.exec(tmpl);
            while (tokens) {
                tmpl = tmpl.replace('{{' + tokens[1], this._directives[tokens[1]].start);
                tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
                tokens = this.regExp.blockCont.exec(tmpl);
            }
            sub = this.regExp.sub.exec(tmpl);
            while (sub) {
                tmpl = tmpl.replace(new RegExp('\\$\\{' + sub[1] + '\\}', 'g'), 'args[' + this.i++ + ']');
                this.args.push(sub[0]);
                sub = this.regExp.sub.exec(tmpl);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_handleIfElse', __ms);
            }
            return tmpl;
        },
        _populateTemplate: function (template, data) {
            var __start = new Date().getTime();
            var i, j, result = '', temp;
            if (!data.length) {
                for (i = 0; i < this.tokens.length; i++) {
                    template = this._populateArgumentValue(data, this.tokens[i], template);
                }
                result = template;
            } else if (data.length) {
                for (j = 0; j < data.length; j++) {
                    temp = template;
                    for (i = 0; i < this.tokens.length; i++) {
                        temp = this._populateArgumentValue(data[j], this.tokens[i], temp);
                    }
                    temp = temp.replace(this.regExp.index, j);
                    result += temp;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_populateTemplate', __ms);
            }
            return result;
        },
        _compileTemplate: function (template, data) {
            var __start = new Date().getTime();
            var i, j, k, result = '', temp, tempArgs = [], arg = '', f;
            if (!data.length) {
                for (j = 0; j < this.args.length; j++) {
                    arg = this.args[j];
                    for (i = 0; i < this.tokens.length; i++) {
                        if (arg === this.tokens[i][0]) {
                            arg = this._getArgumentValue(data, this.tokens[i], arg);
                            break;
                        } else if (typeof arg === 'string') {
                            arg = this._populateArgumentValue(data, this.tokens[i], arg);
                        }
                    }
                    if (arg === undefined) {
                        throw new Error($.ig.Templating.locale.undefinedArgument + this.tokens[i][0]);
                    }
                    if (typeof arg === 'string') {
                        arg = arg.replace(this.regExp.index, 0);
                    }
                    tempArgs.push(arg);
                }
                template = template.replace(/\$i/g, 0);
                result = new Function('args', template).call(this, tempArgs) || '';
            } else if (data.length) {
                temp = template.replace(this.regExp.index, 'args[' + this.args.length + ']');
                f = new Function('args', temp);
                for (j = 0; j < data.length; j++) {
                    tempArgs = [];
                    for (k = 0; k < this.args.length; k++) {
                        arg = this.args[k];
                        for (i = 0; i < this.tokens.length; i++) {
                            if (arg === this.tokens[i][0]) {
                                arg = this._getArgumentValue(data[j], this.tokens[i], arg);
                                break;
                            } else if (typeof arg === 'string') {
                                arg = this._populateArgumentValue(data[j], this.tokens[i], arg);
                            }
                        }
                        if (arg === undefined) {
                            throw new Error($.ig.Templating.locale.undefinedArgument + this.tokens[i][0]);
                        }
                        if (typeof arg === 'string') {
                            arg = arg.replace(this.regExp.index, j);
                        }
                        tempArgs.push(arg);
                    }
                    tempArgs.push(j);
                    result += f.call(this, tempArgs) || '';
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_compileTemplate', __ms);
            }
            return result;
        },
        _getArgumentValue: function (data, token, arg) {
            var __start = new Date().getTime();
            var tempData, l;
            if (token[1].length && token[1].length > 1) {
                tempData = data;
                for (l = 0; l < token[1].length; l++) {
                    if (tempData && tempData.hasOwnProperty(token[1][l])) {
                        tempData = tempData[token[1][l]];
                    } else {
                        tempData = '';
                        break;
                    }
                }
                if (token[2] && typeof tempData === 'string') {
                    arg = this.encode(tempData);
                } else {
                    arg = tempData;
                }
            } else {
                if (token[2] && typeof data[token[1]] === 'string') {
                    arg = this.encode(data[token[1]]);
                } else {
                    arg = data[token[1]];
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_getArgumentValue', __ms);
            }
            return arg;
        },
        _populateArgumentValue: function (data, token, arg) {
            var __start = new Date().getTime();
            var tempData, l, self = this;
            if (token[1].length && token[1].length > 1) {
                tempData = data;
                for (l = 0; l < token[1].length; l++) {
                    if (tempData && tempData.hasOwnProperty(token[1][l])) {
                        tempData = tempData[token[1][l]];
                    } else {
                        tempData = '';
                        break;
                    }
                }
                if (token[2] && typeof tempData === 'string') {
                    arg = arg.replace(token[3], function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                        return self.encode(tempData);
                    });
                } else {
                    arg = arg.replace(token[3], function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                        return tempData === null ? '' : tempData;
                    });
                }
            } else {
                if (token[2]) {
                    arg = arg.replace(token[3], function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                        return self.encode(data[token[1]]);
                    });
                } else {
                    arg = arg.replace(token[3], function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                        return data[token[1]] === null ? '' : data[token[1]];
                    });
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_populateArgumentValue', __ms);
            }
            return arg;
        }
    });
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $.widget('ui.igLoading', {
        options: {
            cssClass: null,
            includeVerticalOffset: true
        },
        _indicator: null,
        _create: function () {
            var __start = new Date().getTime();
            var offset, css;
            css = this.options.cssClass === null ? 'ui-igloadingmsg' : this.options.cssClass;
            this._hgrid = this.element.closest('.ui-iggrid-root').closest('.ui-iggrid');
            if (this.element.children('.' + css).length === 0) {
                this._indicator = $('<span></span>').appendTo(this.element).attr('id', this.element[0].id + '_loading').addClass(css);
                offset = this.element.offset();
                this.refreshPos();
            }
            this._yShift = this._indicator ? Math.round(this._indicator.height() / 2) : 0;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
        },
        indicatorElement: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('indicatorElement', __ms);
            }
            return this._indicator;
        },
        indicator: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('indicator', __ms);
            }
            return this;
        },
        show: function (refresh) {
            var __start = new Date().getTime();
            if (refresh !== false) {
                this.refreshPos();
            }
            if (this._resId) {
                clearInterval(this._resId);
            }
            this._resId = setInterval($.proxy(this._resizeContainer, this), 300);
            this._indicator.css('display', '').css('visibility', 'visible');
            {
                var __ms = new Date().getTime() - __start;
                _putstat('show', __ms);
            }
        },
        hide: function () {
            var __start = new Date().getTime();
            this._indicator.css('display', 'none').css('visibility', 'hidden');
            clearInterval(this._resId);
            this._resId = null;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('hide', __ms);
            }
        },
        _resizeContainer: function () {
            var __start = new Date().getTime();
            var offset = this.element.offset();
            if (offset.top + this.element.innerHeight() / 2 - this._yShift !== this._indicator.css('top')) {
                this.refreshPos();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_resizeContainer', __ms);
            }
        },
        refreshPos: function () {
            var __start = new Date().getTime();
            var offset = this.element.offset(), top = offset.top + this.element.innerHeight() / 2 - this._yShift, left = offset.left + this.element.innerWidth() / 2, verticalOffset, relativeOffset;
            if (this._hgrid.length > 0 && top > this._hgrid.offset().top + this._hgrid.height()) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('refreshPos', __ms);
                }
                return;
            }
            if (this._hgrid.length > 0 && left > this._hgrid.offset().left + this._hgrid.width()) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('refreshPos', __ms);
                }
                return;
            }
            if (this.options.includeVerticalOffset && top > $(window).height()) {
                verticalOffset = ($(window).height() - offset.top - $(window).scrollTop()) / 2;
                top = $(window).height() - verticalOffset < offset.top ? offset.top + verticalOffset : $(window).height() - verticalOffset;
            }
            relativeOffset = $.ig.util.getRelativeOffset(this._indicator);
            top -= relativeOffset.top;
            left -= relativeOffset.left;
            this._indicator.css('left', left).css('top', top);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('refreshPos', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            clearInterval(this._resId);
            this._indicator.remove();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
        }
    });
    $.extend($.ui.igLoading, { version: '13.2.20132.2157' });
    $.widget('ui.igSlider', $.ui.mouse, {
        options: {
            animate: false,
            max: 100,
            min: 0,
            orientation: 'horizontal',
            step: 1,
            value: 0,
            bookmarks: [{
                    value: 0,
                    title: '',
                    disabled: false,
                    css: ''
                }],
            showBookmarkTitle: true,
            syncHandleWithBookmark: true
        },
        css: {
            baseClasses: 'ui-igslider ui-widget ui-widget-content ui-corner-all',
            horizontalOrientationClass: 'ui-igslider-horizontal',
            verticalOrientationClass: 'ui-igslider-vertical',
            sliderDisabledClass: 'ui-igslider-disabled ui-disabled',
            handleClass: 'ui-igslider-handle',
            bookmarkClass: 'ui-igslider-bookmark',
            bookmarkDisabledClass: 'ui-igslider-bookmark-disabled',
            bookmarkTooltipClass: 'ui-igslider-bookmark-tooltip'
        },
        events: {
            start: 'start',
            slide: 'slide',
            stop: 'stop',
            change: 'change',
            bookmarkHit: 'bookmarkhit',
            bookmarkClick: 'bookmarkclick'
        },
        _numpages: 5,
        widget: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('widget', __ms);
            }
            return this.element;
        },
        _createWidget: function (options, element) {
            var __start = new Date().getTime();
            this.options.bookmarks = [];
            $.Widget.prototype._createWidget.apply(this, arguments);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createWidget', __ms);
            }
        },
        _create: function () {
            var __start = new Date().getTime();
            var o = this.options, self = this, css = this.css;
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass(css.baseClasses);
            if (o.disabled) {
                this.element.addClass(css.sliderDisabledClass);
            }
            if ($('.ui-igslider-handle', this.element).length === 0) {
                $('<a href=\'#\'></a>').appendTo(this.element).addClass(css.handleClass);
            }
            this.handles = $('.ui-igslider-handle', this.element).addClass('ui-state-default' + ' ui-corner-all').bind({
                click: function (event) {
                    var __start = new Date().getTime();
                    event.preventDefault();
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('click', __ms);
                    }
                },
                mouseover: function () {
                    var __start = new Date().getTime();
                    if (!o.disabled) {
                        $(this).addClass('ui-state-hover');
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('mouseover', __ms);
                    }
                },
                mouseout: function () {
                    var __start = new Date().getTime();
                    $(this).removeClass('ui-state-hover');
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('mouseout', __ms);
                    }
                },
                focus: function () {
                    var __start = new Date().getTime();
                    if (!o.disabled) {
                        $('.ui-igslider .ui-state-focus').removeClass('ui-state-focus');
                        $(this).addClass('ui-state-focus');
                    } else {
                        $(this).blur();
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('focus', __ms);
                    }
                },
                blur: function () {
                    var __start = new Date().getTime();
                    $(this).removeClass('ui-state-focus');
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('blur', __ms);
                    }
                },
                keydown: function (event) {
                    var __start = new Date().getTime();
                    var ret = true, index = $(this).data('index.ui-igslider-handle'), allowed, curVal, newVal, step;
                    if (self.options.disabled) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('keydown', __ms);
                        }
                        return;
                    }
                    switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        ret = false;
                        if (!self._keySliding) {
                            self._keySliding = true;
                            $(this).addClass('ui-state-active');
                            allowed = self._start(event, index);
                            if (allowed === false) {
                                {
                                    var __ms = new Date().getTime() - __start;
                                    _putstat('keydown', __ms);
                                }
                                return;
                            }
                        }
                        break;
                    }
                    step = self.options.step;
                    curVal = newVal = self.value();
                    switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                        newVal = self.options.min;
                        break;
                    case $.ui.keyCode.END:
                        newVal = self.options.max;
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = self._trimValue(curVal + (self.options.max - self.options.min) / this._numpages);
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = self._trimValue(curVal - (self.options.max - self.options.min) / this._numpages);
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if (curVal === self.options.max) {
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('keydown', __ms);
                            }
                            return;
                        }
                        newVal = self._trimValue(curVal + step);
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if (curVal === self.options.min) {
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('keydown', __ms);
                            }
                            return;
                        }
                        newVal = self._trimValue(curVal - step);
                        break;
                    }
                    self._slide(event, index, newVal);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('keydown', __ms);
                    }
                    return ret;
                },
                keyup: function (event) {
                    var __start = new Date().getTime();
                    var index = $(this).data('index.ui-igslider-handle');
                    if (self._keySliding) {
                        self._keySliding = false;
                        self._stop(event, index);
                        self._change(event, index);
                        $(this).removeClass('ui-state-active');
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('keyup', __ms);
                    }
                }
            }).each(function (i) {
                var __start = new Date().getTime();
                $(this).data('index.ui-igslider-handle', i);
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            });
            this.handle = this.handles.eq(0);
            this._renderBookmarks();
            this._refreshValue();
            this._animateOff = false;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
        },
        _renderBookmarks: function () {
            var __start = new Date().getTime();
            if (this.options.bookmarks && this.options.bookmarks.length > 0) {
                var len = this.options.bookmarks.length, i = 0, o = this.options, css = this.css, mark, self = this;
                for (i; i < len; i++) {
                    mark = o.bookmarks[i];
                    $('<a href=\'#\'></a>').appendTo(this.element).data('index.ui-igslider-bookmark', i).addClass(mark.disabled ? css.bookmarkDisabledClass : css.bookmarkClass).addClass(mark.css && mark.css.length > 0 ? mark.css : '').css('left', o.min !== o.max ? (mark.value - o.min) / (o.max - o.min) * 100 + '%' : '0%');
                }
                this.bookmarks = $('.ui-igslider-bookmark', this.element).addClass('ui-state-default').bind({
                    mousedown: function (event) {
                        var __start = new Date().getTime();
                        var noCancel = true, bookmarkIndex = $(this).data('index.ui-igslider-bookmark');
                        event.preventDefault();
                        event.stopPropagation();
                        noCancel = self._bookmarkClicked(event, bookmarkIndex);
                        if (self.options.syncHandleWithBookmark && noCancel) {
                            self._slide(event, 0, self.options.bookmarks[bookmarkIndex].value);
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('mousedown', __ms);
                        }
                    },
                    mouseover: function (event) {
                        var __start = new Date().getTime();
                        if (!o.disabled) {
                            $(this).addClass('ui-state-hover');
                            if (self.options.showBookmarkTitle) {
                                self._showBookmarkTitle($(this), event);
                            }
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('mouseover', __ms);
                        }
                    },
                    mouseout: function () {
                        var __start = new Date().getTime();
                        if (!o.disabled) {
                            $(this).removeClass('ui-state-hover');
                            if (self.options.showBookmarkTitle) {
                                self._hideBookmarkTitle($(this));
                            }
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('mouseout', __ms);
                        }
                    },
                    click: function (event) {
                        var __start = new Date().getTime();
                        event.preventDefault();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('click', __ms);
                        }
                    }
                });
                this._createBookmarkTooltip();
                this._buildBookmarkHit();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_renderBookmarks', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            this.handles.remove();
            this.clearBookmarks();
            this.element.removeClass(this.css.baseClasses + ' ui-igslider-horizontal' + ' ui-igslider-vertical' + ' ui-igslider-disabled').removeData('slider').unbind('.slider');
            this._mouseDestroy();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
            return this;
        },
        _id: function (suffix) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_id', __ms);
            }
            return this.element[0].id + suffix;
        },
        _showBookmarkTitle: function (bookmark, browserEvent) {
            var __start = new Date().getTime();
            var tooltip = $('#' + this._id('_tooltip')), title = this.options.bookmarks[bookmark.data('index.ui-igslider-bookmark')].title;
            if (title && title.length > 0) {
                tooltip.igTooltip('option', 'text', title);
                tooltip.css('top', browserEvent.pageY - tooltip.outerHeight() - 5).css('left', browserEvent.pageX - tooltip.width() / 2 + bookmark.width() / 2).show();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_showBookmarkTitle', __ms);
            }
        },
        _hideBookmarkTitle: function (bookmark) {
            var __start = new Date().getTime();
            $('#' + this._id('_tooltip')).hide();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_hideBookmarkTitle', __ms);
            }
        },
        _createBookmarkTooltip: function () {
            var __start = new Date().getTime();
            var html = '<div id="' + this._id('_tooltip') + '" class="' + this.css.bookmarkTooltipClass + '"></div>';
            $(html).appendTo($(document.body)).igTooltip({ arrowLocation: 'bottom' }).hide();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createBookmarkTooltip', __ms);
            }
        },
        clearBookmarks: function () {
            var __start = new Date().getTime();
            if (this.bookmarks) {
                this.bookmarks.remove();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('clearBookmarks', __ms);
            }
        },
        _mouseCapture: function (event) {
            var __start = new Date().getTime();
            var o = this.options, position, normValue, index = 0, handle = this.handles.eq(index), self = this, offset, mouseOverHandle;
            if (o.disabled) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_mouseCapture', __ms);
                }
                return false;
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            position = {
                x: event.pageX,
                y: event.pageY
            };
            normValue = this._normValueFromMouse(position);
            this._mouseSliding = true;
            self._handleIndex = index;
            handle.addClass('ui-state-active');
            if (!$.ig.util.isOpera) {
                handle.focus();
            }
            offset = handle.offset();
            mouseOverHandle = !$(event.target).parents().andSelf().is('.ui-igslider-handle');
            this._clickOffset = mouseOverHandle ? {
                left: 0,
                top: 0
            } : {
                left: event.pageX - offset.left - handle.width() / 2,
                top: event.pageY - offset.top - handle.height() / 2 - (parseInt(handle.css('borderTopWidth'), 10) || 0) - (parseInt(handle.css('borderBottomWidth'), 10) || 0) + (parseInt(handle.css('marginTop'), 10) || 0)
            };
            this._slide(event, index, normValue);
            this._animateOff = true;
            this._mouseUpHandler = function (event) {
                var __start = new Date().getTime();
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('', __ms);
                }
                return self._mouseStop(event);
            };
            $(document).bind('mouseup.' + this.widgetName, this._mouseUpHandler);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseCapture', __ms);
            }
            return true;
        },
        _mouseStart: function (event) {
            var __start = new Date().getTime();
            $(document).unbind('mouseup.' + this.widgetName, this._mouseUpHandler);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseStart', __ms);
            }
            return this._start(event, this._handleIndex);
        },
        _mouseDrag: function (event) {
            var __start = new Date().getTime();
            var position = {
                    x: event.pageX,
                    y: event.pageY
                }, normValue = this._normValueFromMouse(position);
            this._slide(event, this._handleIndex, normValue);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseDrag', __ms);
            }
            return false;
        },
        _mouseStop: function (event) {
            var __start = new Date().getTime();
            var self = this;
            this.handles.removeClass('ui-state-active');
            setTimeout(function () {
                var __start = new Date().getTime();
                self._mouseSliding = false;
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            }, 1000);
            this._stop(event, this._handleIndex);
            this._change(event, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseStop', __ms);
            }
            return false;
        },
        _detectOrientation: function () {
            var __start = new Date().getTime();
            var o = this.options, css = this.css;
            if (o.orientation === 'vertical') {
                this.orientation = 'vertical';
                this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass);
            } else {
                this.orientation = 'horizontal';
                this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_detectOrientation', __ms);
            }
        },
        _normValueFromMouse: function (position) {
            var __start = new Date().getTime();
            var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse;
            if (this.orientation === 'horizontal') {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            }
            percentMouse = pixelMouse / pixelTotal;
            if (percentMouse > 1) {
                percentMouse = 1;
            }
            if (percentMouse < 0) {
                percentMouse = 0;
            }
            if (this.orientation === 'vertical') {
                percentMouse = 1 - percentMouse;
            }
            valueTotal = this.options.max - this.options.min;
            valueMouse = this.options.min + percentMouse * valueTotal;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_normValueFromMouse', __ms);
            }
            return this._trimValue(valueMouse);
        },
        _start: function (event, index) {
            var __start = new Date().getTime();
            var uiHash = {
                    handle: this.handles[index],
                    value: this.value()
                };
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_start', __ms);
            }
            return this._trigger(this.events.start, event, uiHash);
        },
        _slide: function (event, index, newVal) {
            var __start = new Date().getTime();
            var allowed;
            if (newVal !== this.value()) {
                allowed = this._trigger(this.events.slide, event, {
                    handle: this.handles[index],
                    value: newVal
                });
                if (allowed !== false) {
                    this.value(newVal);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_slide', __ms);
            }
        },
        _stop: function (event, index) {
            var __start = new Date().getTime();
            var uiHash = {
                    handle: this.handles[index],
                    value: this.value()
                };
            this._trigger(this.events.stop, event, uiHash);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_stop', __ms);
            }
        },
        _change: function (event, index) {
            var __start = new Date().getTime();
            if (!this._keySliding && !this._mouseSliding) {
                var uiHash = {
                        handle: this.handles[index],
                        value: this.value()
                    };
                this._trigger(this.events.change, event, uiHash);
                this._checkBookmarkHit(uiHash.value, event);
                if (uiHash.value === this.options.max && this._marksHit && this._marksHit.length === 0) {
                    this._buildBookmarkHit();
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_change', __ms);
            }
        },
        _checkBookmarkHit: function (currentValue, event) {
            var __start = new Date().getTime();
            if (this._marksHit && this._marksHit.length > 0 && currentValue >= this._marksHit[0].value) {
                var index = this._marksHit[0].index;
                this._marksHit.shift();
                this._bookmarkHit(event, index);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_checkBookmarkHit', __ms);
            }
        },
        _buildBookmarkHit: function () {
            var __start = new Date().getTime();
            var b = this.options.bookmarks || [], i = b.length - 1;
            this._marksHit = [];
            for (i; i >= 0; i--) {
                if (!b[i].disabled) {
                    this._marksHit.push({
                        value: b[i].value,
                        index: i
                    });
                }
            }
            this._marksHit.sort(this._sortBookmarksJSON);
            this._marksHit = $.extend(true, [], this._marksHit);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_buildBookmarkHit', __ms);
            }
        },
        _sortBookmarksJSON: function (a, b) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_sortBookmarksJSON', __ms);
            }
            return a.value - b.value;
        },
        _bookmarkClicked: function (event, index) {
            var __start = new Date().getTime();
            var uiHash = {
                    bookmarkElement: this.bookmarks[index],
                    bookmark: this.options.bookmarks[index]
                };
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_bookmarkClicked', __ms);
            }
            return this._trigger(this.events.bookmarkClick, event, uiHash);
        },
        _bookmarkHit: function (event, index) {
            var __start = new Date().getTime();
            var uiHash = {
                    bookmarkElement: this.bookmarks[index],
                    bookmark: this.options.bookmarks[index]
                };
            if (uiHash.bookmarkElement) {
                this._trigger(this.events.bookmarkHit, event, uiHash);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_bookmarkHit', __ms);
            }
        },
        value: function (newValue) {
            var __start = new Date().getTime();
            if (arguments.length) {
                this.options.value = this._trimValue(newValue);
                this._refreshValue();
                this._change(null, 0);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('value', __ms);
            }
            return this._value();
        },
        _setOption: function (key, value) {
            var __start = new Date().getTime();
            $.Widget.prototype._setOption.apply(this, arguments);
            switch (key) {
            case 'disabled':
                if (value) {
                    this.handles.filter('.ui-state-focus').blur();
                    this.handles.removeClass('ui-state-hover');
                    this.handles.attr('disabled', 'disabled');
                    this.element.addClass('ui-disabled');
                } else {
                    this.handles.removeAttr('disabled');
                    this.element.removeClass('ui-disabled');
                }
                break;
            case 'orientation':
                this._detectOrientation();
                this._refreshValue();
                break;
            case 'value':
                if (this._mouseSliding === true) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_setOption', __ms);
                    }
                    return;
                }
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;
            case 'bookmarks':
                this.clearBookmarks();
                this._renderBookmarks();
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setOption', __ms);
            }
        },
        _value: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_value', __ms);
            }
            return this._trimValue(this.options.value);
        },
        _trimValue: function (val) {
            var __start = new Date().getTime();
            if (val < this.options.min) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_trimValue', __ms);
                }
                return this.options.min;
            }
            if (val > this.options.max) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_trimValue', __ms);
                }
                return this.options.max;
            }
            var step = this.options.step > 0 ? this.options.step : 1, valModStep = val % step, alignValue = val - valModStep;
            if (Math.abs(valModStep) * 2 >= step) {
                alignValue += valModStep > 0 ? step : -step;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_trimValue', __ms);
            }
            return parseFloat(alignValue.toFixed(5));
        },
        _normPercentValue: function (val) {
            var __start = new Date().getTime();
            var decrease = 0, retVal = val;
            if (this.orientation === 'vertical') {
                decrease = (this.handle.outerHeight() / this.element.outerHeight()).toFixed(2) * 100;
            }
            if (val - decrease > 0) {
                retVal = val - decrease;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_normPercentValue', __ms);
            }
            return retVal;
        },
        _refreshValue: function () {
            var __start = new Date().getTime();
            var o = this.options, control = this, animate = !this._animateOff ? o.animate : false, _set = {}, value = this.value(), valueMin = this.options.min, valueMax = this.options.max, valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
            _set[control.orientation === 'horizontal' ? 'left' : 'bottom'] = this._normPercentValue(valPercent) + '%';
            this.handle.stop(1, 1)[animate ? 'animate' : 'css'](_set, o.animate);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_refreshValue', __ms);
            }
        }
    });
    $.extend($.ui.igSlider, { version: '13.2.20132.2157' });
    $.widget('ui.igProgressBar', {
        options: {
            animate: false,
            animateTimeout: 100,
            max: 100,
            min: 0,
            orientation: 'horizontal',
            value: 0,
            width: '0px',
            height: '0px',
            range: false,
            endValue: 100
        },
        css: {
            baseClasses: 'ui-igprogressbar ui-widget ui-widget-content ui-corner-all',
            horizontalOrientationClass: 'ui-igprogressbar-horizontal',
            verticalOrientationClass: 'ui-igprogressbar-vertical',
            disabledClass: 'ui-igprogressbar-disabled ui-disabled',
            progressRangeClass: 'ui-igprogressbar-range ui-widget-header ui-corner-all'
        },
        events: { change: 'change' },
        _animationOff: true,
        widget: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('widget', __ms);
            }
            return this.element;
        },
        _detectOrientation: function () {
            var __start = new Date().getTime();
            var css = this.css;
            if (this.options.orientation === 'vertical') {
                this.orientation = 'vertical';
                this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass);
            } else {
                this.orientation = 'horizontal';
                this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_detectOrientation', __ms);
            }
        },
        _id: function (suffix) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_id', __ms);
            }
            return this.element[0].id + suffix;
        },
        _create: function () {
            var __start = new Date().getTime();
            var o = this.options, css = this.css;
            this._detectOrientation();
            this.element.addClass(css.baseClasses);
            if (o.disabled) {
                this.element.addClass(css.disabledClass);
            }
            if (o.width !== '0px') {
                this.element.css('width', o.width);
            }
            if (o.height !== '0px') {
                this.element.css('height', o.height);
            }
            if (o.orientation === 'horizontal') {
                $('<div id="' + this._id('_progress') + '" class="' + css.progressRangeClass + '" style="height:100%; top:0px; left:0%; width:0%;"></div>').appendTo(this.element);
            } else {
                $('<div id="' + this._id('_progress') + '" class="' + css.progressRangeClass + '" style="height:0%; bottom:0%; left:0px; width:100%;"></div>').appendTo(this.element);
            }
            this._refreshValue();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            this.element.removeClass('ui-igprogressbar' + ' ui-igprogressbar-horizontal' + ' ui-igprogressbar-vertical' + ' ui-igprogressbar-disabled' + ' ui-widget' + ' ui-widget-content' + ' ui-corner-all').removeData('igProgressBar').unbind('.igProgressBar');
            $('#' + this._id('_progress')).remove();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
            return this;
        },
        _change: function (event) {
            var __start = new Date().getTime();
            var uiHash = { value: this.value() };
            this._trigger(this.events.change, event, uiHash);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_change', __ms);
            }
        },
        value: function (newValue) {
            var __start = new Date().getTime();
            if (arguments.length) {
                this.options.value = this._trimValue(newValue);
                this._refreshValue();
                this._change(null);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('value', __ms);
            }
            return this.options.value;
        },
        _setOption: function (key, value) {
            var __start = new Date().getTime();
            $.Widget.prototype._setOption.apply(this, arguments);
            var o = this.options;
            switch (key) {
            case 'disabled':
                if (value) {
                    this.element.addClass(this.css.disabledClass);
                } else {
                    this.element.removeClass(this.css.disabledClass);
                }
                break;
            case 'orientation':
                this._detectOrientation();
                this._refreshValue();
                break;
            case 'value':
                this._animationOff = true;
                o.value = this._trimValue(value);
                this._refreshValue();
                this._change(null);
                this._animationOff = false;
                break;
            case 'endValue':
                o.endValue = this._trimValue(value);
                this._refreshValue();
                break;
            case 'max':
                if (o.endValue > o.max) {
                    o.endValue = o.max;
                    this._refreshValue();
                }
                break;
            case 'width':
                this.element.css('width', value);
                break;
            case 'height':
                this.element.css('height', value);
                break;
            case 'animate':
                o.animate = value;
                break;
            case 'animateTimeout':
                o.animateTimeout = value;
                break;
            default:
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setOption', __ms);
            }
        },
        _trimValue: function (val) {
            var __start = new Date().getTime();
            if (val < this.options.min) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_trimValue', __ms);
                }
                return this.options.min;
            }
            if (val > this.options.max) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_trimValue', __ms);
                }
                return this.options.max;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_trimValue', __ms);
            }
            return parseInt(val, 10);
        },
        _refreshValue: function () {
            var __start = new Date().getTime();
            var o = this.options, value = o.value, valueMin = o.min, valueMax = o.max, valueEnd = o.endValue, valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0, valueEndPercent = value !== valueEnd ? (valueEnd - value) / (valueMax - valueMin) * 100 : 0, progressBar = $('#' + this._id('_progress'));
            if (o.range) {
                if (o.orientation === 'horizontal') {
                    progressBar.css('left', valPercent + '%').css('width', valueEndPercent + '%');
                } else {
                    progressBar.css('bottom', valPercent + '%').css('height', valueEndPercent + '%');
                }
            } else {
                if (o.animate === true) {
                    if (o.orientation === 'horizontal') {
                        if (progressBar[0].style.width === '0%') {
                            progressBar.css({ width: '0px' });
                        }
                        if (progressBar.is(':hidden') === false) {
                            progressBar.animate({ width: valPercent + '%' }, o.animateTimeout);
                        } else {
                            progressBar.css('width', valPercent + '%');
                        }
                    } else {
                        if (progressBar[0].style.height === '0%') {
                            progressBar.css({ height: '0px' });
                        }
                        if (progressBar.is(':hidden') === false) {
                            progressBar.animate({ height: valPercent + '%' }, o.animateTimeout);
                        } else {
                            progressBar.animate({ height: valPercent + '%' }, o.animateTimeout);
                        }
                    }
                } else {
                    if (o.orientation === 'horizontal') {
                        progressBar.css('width', valPercent + '%');
                    } else {
                        progressBar.css('height', valPercent + '%');
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_refreshValue', __ms);
            }
        }
    });
    $.extend($.ui.igProgressBar, { version: '13.2.20132.2157' });
    $.widget('ui.igButton', {
        options: {
            width: null,
            height: null,
            link: {
                href: null,
                target: null,
                title: null
            },
            labelText: '',
            centerLabel: false,
            css: null,
            onlyIcons: false,
            icons: {
                primary: null,
                secondary: null
            },
            title: false
        },
        _id: function (suffix) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_id', __ms);
            }
            return this.element[0].id + suffix;
        },
        _create: function () {
            var __start = new Date().getTime();
            var self = this, o = self.options, e = this.element, inputType, css = {
                    buttonClassIE6: 'ui-ie6',
                    buttonClasses: 'ui-button ui-igbutton ui-widget ui-widget-content ui-corner-all ui-state-default',
                    buttonHoverClasses: 'ui-state-hover',
                    buttonActiveClasses: 'ui-state-active',
                    buttonFocusClasses: 'ui-state-focus',
                    buttonLabelClass: 'ui-button-text',
                    buttonDisabledClass: 'ui-state-disabled',
                    buttonPrimaryIconClass: 'ui-button-icon-primary ui-icon',
                    buttonMainElementPrimaryIconClass: ' ui-button-text-icon-primary',
                    buttonMainElementSecondaryIconClass: ' ui-button-text-icon-secondary',
                    buttonSecondaryIconClass: 'ui-button-icon-secondary ui-icon',
                    buttonIconsOnly: 'ui-button-icons-only',
                    buttonIconOnly: 'ui-button-icon-only',
                    buttonIcons: 'ui-button-text-icons',
                    buttonTextOnlyClass: 'ui-button-text-only'
                };
            this._attached = false;
            o.css = $.extend(css, o.css);
            self._getInitValues();
            if (e.is('div')) {
                self._renderDivButton();
            } else if (e.is('a')) {
                self._renderAHref();
            } else if (e.is('input')) {
                inputType = e.attr('type').toUpperCase();
                if (inputType === 'BUTTON' || inputType === 'SUBMIT' || inputType === 'RESET') {
                    self._renderInput();
                } else {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_create', __ms);
                    }
                    return;
                }
            } else if (e.is('button')) {
                self._renderButton();
            } else {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_create', __ms);
                }
                return;
            }
            if (o.width !== null) {
                self._setWidth(o.width);
            }
            if (o.height !== null) {
                self._setHeight(o.height);
            }
            e.addClass(o.css.buttonClasses).addClass(o.css.buttonDefaultClasses);
            if (o.centerLabel === true) {
                self._centerLabel();
            }
            if (o.disabled) {
                self._disableButton();
            } else {
                self._enableButton();
            }
            self._setOnlyIcons();
            e.attr('role', 'button');
            e.attr('aria-disabled', 'false');
            self._attachButtonEvents();
            self.setTitle(o.title);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
            return this;
        },
        setTitle: function (title) {
            var __start = new Date().getTime();
            var e = this.element;
            if (title === false) {
                e.removeAttr('title');
            } else {
                e.attr('title', title);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('setTitle', __ms);
            }
        },
        widget: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('widget', __ms);
            }
            return this.element;
        },
        _isRedirect: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_isRedirect', __ms);
            }
            return this.options.link.href !== null;
        },
        _renderDivButton: function () {
            var __start = new Date().getTime();
            this._setLabel();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_renderDivButton', __ms);
            }
        },
        _renderAHref: function () {
            var __start = new Date().getTime();
            this._setLinkOptions(true);
            this._setLabel();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_renderAHref', __ms);
            }
        },
        _renderInput: function () {
            var __start = new Date().getTime();
            var e = this.element;
            e.attr('value', this.options.labelText);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_renderInput', __ms);
            }
        },
        _renderButton: function () {
            var __start = new Date().getTime();
            this._setLabel();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_renderButton', __ms);
            }
        },
        _disableButton: function () {
            var __start = new Date().getTime();
            var self = this, e = self.element;
            e.addClass(self.options.css.buttonDisabledClass);
            if (e.is('a') === true) {
                e.removeAttr('href');
                e.removeAttr('target');
                e.removeAttr('title');
            } else {
                e.attr('disabled', 'true');
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_disableButton', __ms);
            }
        },
        _enableButton: function () {
            var __start = new Date().getTime();
            var self = this, e = self.element, o = this.options;
            if (e.hasClass(o.css.buttonDisabledClass)) {
                e.removeClass(o.css.buttonDisabledClass);
            }
            e.removeAttr('disabled');
            if (e.is('a') === true) {
                self._setLinkOptions(true);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_enableButton', __ms);
            }
        },
        _setLabel: function () {
            var __start = new Date().getTime();
            var e = this.element, o = this.options, icons = o.icons, css = o.css, html = '', isSetPrimary = this._isSetPrimaryIcon(), isSetSecondary = this._isSetSecondaryIcon(), labelText = o.labelText === null || o.labelText === '' ? e.text() : o.labelText;
            e.attr('title', o.labelText);
            if (e.is('input')) {
                e.attr('value', o.labelText);
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_setLabel', __ms);
                }
                return;
            }
            if (isSetPrimary) {
                html += '<span class="' + css.buttonPrimaryIconClass + ' ' + icons.primary + '" id="' + this._id('_picn') + '"></span>';
            }
            html += '<span class="' + o.css.buttonLabelClass + '" id="' + this._id('_lbl') + '">' + labelText + '</span>';
            if (isSetSecondary) {
                html += '<span class="' + css.buttonSecondaryIconClass + ' ' + icons.secondary + '" id="' + this._id('_sicn') + '"></span>';
            }
            if (isSetPrimary && isSetSecondary && !o.onlyIcons) {
                e.addClass(css.buttonIcons);
            } else if (o.onlyIcons) {
                this._setOnlyIcons();
            } else if (isSetPrimary) {
                e.addClass(css.buttonMainElementPrimaryIconClass);
            } else if (isSetSecondary) {
                e.addClass(css.buttonMainElementSecondaryIconClass);
            } else {
                e.addClass(css.buttonTextOnlyClass);
            }
            e.html(html);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setLabel', __ms);
            }
        },
        _setOnlyIcons: function () {
            var __start = new Date().getTime();
            var e = this.element, css = this.options.css;
            if (this.options.onlyIcons === false) {
                if (e.hasClass(css.buttonIconsOnly)) {
                    e.removeClass(css.buttonIconsOnly);
                }
                if (e.hasClass(css.buttonIconOnly)) {
                    e.removeClass(css.buttonIconOnly);
                }
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    e.addClass(css.buttonIcons);
                }
            } else {
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    e.addClass(css.buttonIconsOnly);
                } else {
                    e.addClass(css.buttonIconOnly);
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setOnlyIcons', __ms);
            }
        },
        _setLinkOptions: function (isAHref) {
            var __start = new Date().getTime();
            var self = this, e = self.element, o = this.options;
            if (isAHref) {
                if (o.link !== null && o.link.href !== null) {
                    e.attr('href', o.link.href);
                } else {
                    e.removeAttr('href');
                }
                if (o.link !== null && o.link.target !== null) {
                    e.attr('target', o.link.target);
                } else {
                    e.removeAttr('target');
                }
                if (o.link !== null && o.link.title !== null) {
                    e.attr('title', o.link.title);
                } else {
                    e.removeAttr('title');
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setLinkOptions', __ms);
            }
        },
        _setWidth: function (value) {
            var __start = new Date().getTime();
            var e = this.element;
            if (value === null) {
                e.css('width', '');
            } else {
                e.css('width', value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setWidth', __ms);
            }
        },
        _setHeight: function (value) {
            var __start = new Date().getTime();
            var e = this.element;
            if (value === null) {
                e.css('height', '');
            } else {
                e.css('height', value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setHeight', __ms);
            }
        },
        _setOption: function (key, val) {
            var __start = new Date().getTime();
            var e = this.element, self = this;
            $.Widget.prototype._setOption.apply(this, [
                key,
                val
            ]);
            switch (key) {
            case 'width':
                self._setWidth(val);
                break;
            case 'height':
                self._setHeight(val);
                break;
            case 'link':
                self._setLinkOptions(e.is('a') === true);
                break;
            case 'disabled':
                val = Boolean(val);
                if (val === true) {
                    self._disableButton();
                } else {
                    self._enableButton();
                }
                break;
            case 'labelText':
                self._setLabel();
                break;
            case 'centerLabel':
                val = Boolean(val);
                if (val) {
                    self._centerLabel();
                } else {
                    self._removeCenterLabel();
                }
                break;
            case 'onlyIcons':
                val = Boolean(val);
                self._setOnlyIcons();
                break;
            case 'icons':
                self._setLabel();
                break;
            case 'title':
                self.setTitle(val);
                break;
            default:
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setOption', __ms);
            }
        },
        _centerLabel: function () {
            var __start = new Date().getTime();
            var self = this, e = self.element, l = $('#' + self._id('_lbl')), left = (e.width() - l.width()) / 2, top = (e.height() - l.height()) / 2;
            l.css({
                position: 'relative',
                top: top + 'px',
                left: left + 'px'
            });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_centerLabel', __ms);
            }
        },
        _removeCenterLabel: function () {
            var __start = new Date().getTime();
            var self = this, l = $('#' + self._id('_lbl'));
            if (l.length > 0) {
                l.css({
                    position: '',
                    top: '',
                    left: ''
                });
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_removeCenterLabel', __ms);
            }
        },
        _dettachEvents: function () {
            var __start = new Date().getTime();
            var self = this, e = self.element;
            this._attached = false;
            e.unbind(this._events);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_dettachEvents', __ms);
            }
            return;
        },
        _onMouseOver: function (event) {
            var __start = new Date().getTime();
            var noCancel;
            if (this.options.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onMouseOver', __ms);
                }
                return;
            }
            noCancel = this._trigger('mouseover', event);
            if (noCancel) {
                this.element.addClass(this.options.css.buttonHoverClasses);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onMouseOver', __ms);
            }
        },
        _onMouseOut: function (event) {
            var __start = new Date().getTime();
            var self = this, e = self.element, o = this.options, noCancel;
            if (o.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onMouseOut', __ms);
                }
                return;
            }
            noCancel = self._trigger('mouseout', event);
            if (noCancel) {
                e.removeClass(o.css.buttonHoverClasses);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onMouseOut', __ms);
            }
        },
        _onClick: function (event) {
            var __start = new Date().getTime();
            var e = this.element, self = this, o = this.options, noCancel;
            if (o.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onClick', __ms);
                }
                return;
            }
            noCancel = self._trigger('click', event);
            if (noCancel) {
                this.element.removeClass(o.css.buttonHoverClasses);
                if (self._isRedirect() === true && e.is('a') === false) {
                    if (o.link.target === '_blank') {
                        window.open(o.link.href);
                    } else {
                        window.location = o.link.href;
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onClick', __ms);
            }
        },
        _onMouseDown: function (event) {
            var __start = new Date().getTime();
            var e = this.element, o = this.options, noCancel;
            if (o.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onMouseDown', __ms);
                }
                return;
            }
            noCancel = this._trigger('mousedown', event);
            if (noCancel) {
                e.removeClass(o.css.buttonHoverClasses);
                e.addClass(o.css.buttonActiveClasses);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onMouseDown', __ms);
            }
        },
        _onMouseUp: function (event) {
            var __start = new Date().getTime();
            var o = this.options, noCancel;
            if (o.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onMouseUp', __ms);
                }
                return;
            }
            noCancel = this._trigger('mouseup', event);
            if (noCancel) {
                this.element.removeClass(o.css.buttonHoverClasses);
                this.element.removeClass(o.css.buttonActiveClasses);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onMouseUp', __ms);
            }
        },
        _onFocus: function (event) {
            var __start = new Date().getTime();
            var o = this.options, noCancel;
            if (o.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onFocus', __ms);
                }
                return;
            }
            noCancel = this._trigger('focus', event);
            if (noCancel) {
                this.element.addClass(o.css.buttonFocusClasses);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onFocus', __ms);
            }
        },
        _onBlur: function (event) {
            var __start = new Date().getTime();
            var o = this.options, noCancel;
            if (o.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onBlur', __ms);
                }
                return;
            }
            noCancel = this._trigger('blur', event);
            if (noCancel) {
                this.element.removeClass(o.css.buttonActiveClasses);
                this.element.removeClass(o.css.buttonFocusClasses);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onBlur', __ms);
            }
        },
        _onKeyDown: function (event) {
            var __start = new Date().getTime();
            var o = this.options;
            if (o.disabled === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onKeyDown', __ms);
                }
                return;
            }
            this._trigger('keydown', event);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onKeyDown', __ms);
            }
        },
        _attachButtonEvents: function () {
            var __start = new Date().getTime();
            var self = this, e = self.element;
            if (this._attached === true) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_attachButtonEvents', __ms);
                }
                return;
            }
            this._attached = true;
            this._events = {
                mouseover: function (e) {
                    var __start = new Date().getTime();
                    self._onMouseOver(e, self);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('mouseover', __ms);
                    }
                },
                click: function (e) {
                    var __start = new Date().getTime();
                    self._onClick(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('click', __ms);
                    }
                },
                mouseout: function (e) {
                    var __start = new Date().getTime();
                    self._onMouseOut(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('mouseout', __ms);
                    }
                },
                mousedown: function (e) {
                    var __start = new Date().getTime();
                    self._onMouseDown(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('mousedown', __ms);
                    }
                },
                mouseup: function (e) {
                    var __start = new Date().getTime();
                    self._onMouseUp(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('mouseup', __ms);
                    }
                },
                focus: function (e) {
                    var __start = new Date().getTime();
                    self._onFocus(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('focus', __ms);
                    }
                },
                blur: function (e) {
                    var __start = new Date().getTime();
                    self._onBlur(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('blur', __ms);
                    }
                },
                keydown: function (e) {
                    var __start = new Date().getTime();
                    self._onKeyDown(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('keydown', __ms);
                    }
                }
            };
            e.bind(this._events);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_attachButtonEvents', __ms);
            }
        },
        _isSetPrimaryIcon: function () {
            var __start = new Date().getTime();
            var primary = this.options.icons.primary, isSet = false;
            if (primary !== undefined && primary !== null) {
                isSet = true;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_isSetPrimaryIcon', __ms);
            }
            return isSet;
        },
        _isSetSecondaryIcon: function () {
            var __start = new Date().getTime();
            var secondary = this.options.icons.secondary, isSet = false;
            if (secondary !== undefined && secondary !== null) {
                isSet = true;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_isSetSecondaryIcon', __ms);
            }
            return isSet;
        },
        _setAttribute: function (e, attr, attrName) {
            var __start = new Date().getTime();
            if (attr !== undefined && attr !== '' && attr !== null) {
                e.attr(attrName, attr);
            } else {
                e.removeAttr(attrName);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setAttribute', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            this._dettachEvents();
            this._rollbackInitValues();
            this._events = null;
            $.Widget.prototype.destroy.apply(this, arguments);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
        },
        _getInitValues: function () {
            var __start = new Date().getTime();
            var e = this.element;
            this._innerHTML = e.html();
            this._cssClasses = e.attr('class');
            this._role = e.attr('role');
            this._href = e.attr('href');
            this._title = e.attr('title');
            this._target = e.attr('target');
            this._width = e.attr('width');
            this._height = e.attr('height');
            this._disabled = e.attr('disabled');
            this._value = e.val();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_getInitValues', __ms);
            }
        },
        _rollbackInitValues: function () {
            var __start = new Date().getTime();
            var e = this.element;
            e.html(this._innerHTML);
            if (e.is('a')) {
                this._setAttribute(e, this._href, 'href');
                this._setAttribute(e, this._target, 'target');
            } else if (e.is('input')) {
                e.val(this._value);
            }
            this._setAttribute(e, this._title, 'title');
            this._setAttribute(e, this._width, 'width');
            this._setAttribute(e, this._height, 'height');
            this._setAttribute(e, this._cssClasses, 'class');
            this._setAttribute(e, this._role, 'role');
            this._setAttribute(e, this._disabled, 'disabled');
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_rollbackInitValues', __ms);
            }
        }
    });
    $.extend($.ui.igButton, { version: '13.2.20132.2157' });
    $.widget('ui.igTooltip', {
        css: {
            baseClasses: 'ui-widget ui-igpopover ui-igplayer-tooltip',
            arrowImageBaseClass: 'ui-igpopover-arrow-'
        },
        options: {
            text: '',
            arrowLocation: 'top'
        },
        _setOption: function (key, value) {
            var __start = new Date().getTime();
            $.Widget.prototype._setOption.apply(this, arguments);
            switch (key) {
            case 'text':
                $('div.ui-widget-content', this.element).html(value);
                break;
            case 'arrowLocation':
                $('div', this.element).remove();
                this._renderTooltip();
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setOption', __ms);
            }
        },
        _create: function () {
            var __start = new Date().getTime();
            if (this.element.is('div')) {
                this._renderTooltip();
                this.element.addClass(this.css.baseClasses);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
        },
        _renderTooltip: function () {
            var __start = new Date().getTime();
            switch (this.options.arrowLocation) {
            case 'top':
                this._createArrowDiv();
                this._createContentDiv();
                break;
            case 'bottom':
                this._createContentDiv();
                this._createArrowDiv();
                break;
            case 'left':
                break;
            case 'right':
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_renderTooltip', __ms);
            }
        },
        _createContentDiv: function () {
            var __start = new Date().getTime();
            var t = this.options.text && this.options.text.length > 0 ? this.options.text : '';
            $('<div class="ui-widget-content ui-corner-all">' + t + '</div>').appendTo(this.element);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createContentDiv', __ms);
            }
        },
        _createArrowDiv: function () {
            var __start = new Date().getTime();
            $('<div class="' + this.css.arrowImageBaseClass + this.options.arrowLocation + '"></div>').appendTo(this.element);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createArrowDiv', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            this.element.children().remove();
            this.element.removeClass(this.css.baseClasses);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
        }
    });
    $.extend($.ui.igTooltip, { version: '13.2.20132.2157' });
    $.widget('ui.igToolbar', {
        options: {
            height: null,
            width: null,
            allowCollapsing: true,
            collapseButtonIcon: 'ui-igbutton-collapsed',
            expandButtonIcon: 'ui-igbutton-expanded',
            name: '',
            displayName: '',
            items: [],
            isExpanded: true
        },
        events: {
            toolbarButtonClick: 'toolbarButtonClick',
            toolbarComboOpening: 'toolbarComboOpening',
            toolbarComboSelected: 'toolbarComboSelected',
            toolbarMouseDown: 'toolbarMouseDown',
            toolbarCustomItemClick: 'toolbarCustomItemClick',
            itemRemoved: 'itemRemoved',
            itemAdded: 'itemAdded',
            collapsing: 'collapsing',
            collapsed: 'collapsed',
            expanding: 'expanding',
            expanded: 'expanded',
            itemDisable: 'itemDisable',
            itemEnabled: 'itemEnabled'
        },
        css: {
            toolbarWidget: 'ui-widget ui-widget-content ui-igtoolbar ui-corner-all',
            toolbarWrapperConteiner: 'ui-widget ui-widget-content ui-igtoolbar ui-corner-all',
            toolbarCollapsedButton: 'ui-state-default ui-igbutton-all-caps',
            igToolbarSeparator: 'ig-toolbar-separator ui-widget-content'
        },
        _id: function (id) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_id', __ms);
            }
            return this.element[0].id + id;
        },
        widget: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('widget', __ms);
            }
            return this.element;
        },
        _create: function () {
            var __start = new Date().getTime();
            this._render();
            this._createItems();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
        },
        _init: function () {
            var __start = new Date().getTime();
            this._attachEvents();
            if (!this.options.isExpanded) {
                this.buttonsList.hide();
                this.collapseBtn.igToolbarButton('toggle').children(':first').switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon);
            }
            this._width = this.collapseBtn.outerWidth(true) + this.buttonsList.width();
            this._height = this.element.height();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_init', __ms);
            }
        },
        _render: function () {
            var __start = new Date().getTime();
            var o = this.options;
            this.element.addClass(this.css.toolbarWidget);
            this.element.width(this.options.width).height(this.options.height);
            this.collapseBtn = $('<div tabIndex="0" id="' + this._id('_collapseButton') + '"></div>').appendTo(this.element).igToolbarButton({
                onlyIcons: true,
                labelText: '&nbsp;',
                title: $.ig.HtmlEditor.locale.collapseButtonTitle + ' ' + this.options.displayName,
                icons: { primary: o.collapseButtonIcon }
            });
            this.toolbarBody = this.element.find('#' + this._id('_toolbar'));
            this.buttonsList = $('<span id="' + this._id('_toolbar_buttons') + '" style="display:inline-block"></span>').appendTo(this.element);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_render', __ms);
            }
        },
        _onCollapse: function (e) {
            var __start = new Date().getTime();
            var noCancel, event, cancelableEvent, o = this.options, width, self = this, visibility, opacity;
            if (!o.allowCollapsing) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onCollapse', __ms);
                }
                return;
            }
            if (o.isExpanded) {
                event = 'collapsed';
                cancelableEvent = 'collapsing';
                o.isExpanded = false;
                width = this.element.height();
                this.collapseBtn.attr('title', $.ig.HtmlEditor.locale.expandButtonTitle + ' ' + this.options.displayName).children(':first').switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon);
                visibility = 'hidden';
                opacity = '0.0';
            } else {
                event = 'expanded';
                cancelableEvent = 'expanding';
                o.isExpanded = true;
                width = this._width;
                this.buttonsList.show();
                this.collapseBtn.attr('title', $.ig.HtmlEditor.locale.collapseButtonTitle + ' ' + this.options.displayName).children(':first').switchClass(this.options.expandButtonIcon, this.options.collapseButtonIcon);
                visibility = 'visible';
                opacity = '1';
            }
            e.stopPropagation();
            noCancel = this._trigger(this.events[cancelableEvent], e, {
                owner: this,
                toolbarElement: this.element,
                toolbar: {}
            });
            if (noCancel) {
                this.element.css({ overflow: 'hidden' });
                this.element.animate({ width: width }, 300, null, function () {
                    var __start = new Date().getTime();
                    if (!o.isExpanded) {
                        self.buttonsList.hide();
                    }
                    if (document.documentMode === 7) {
                        self.buttonsList.attr('style', 'visibility: ' + visibility + ' !important;');
                    }
                    self._trigger(self.events[event], e, {
                        owner: self,
                        toolbarElement: self.element,
                        toolbar: {}
                    });
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                });
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onCollapse', __ms);
            }
        },
        _setOption: function (name, value) {
            var __start = new Date().getTime();
            $.Widget.prototype._setOption.apply(this, arguments);
            switch (name) {
            case 'allowCollapsing':
                this.options.allowCollapsing = value;
                break;
            case 'items':
                this._updateItems(value);
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setOption', __ms);
            }
        },
        _isSelectedAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (props.value) {
                el.addClass('ui-state-active');
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_isSelectedAction', __ms);
            }
        },
        _tooltipAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.title = props.value;
            } else {
                el.igToolbarButton('option', 'title', props.value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_tooltipAction', __ms);
            }
        },
        _buttonIconAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.icons = { primary: props.value };
            } else {
                el.igToolbarButton('option', 'icons', { primary: props.value });
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_buttonIconAction', __ms);
            }
        },
        _comboDataSourceAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.dataSource = props.value;
            } else {
                el.igCombo('option', 'dataSource', props.value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_comboDataSourceAction', __ms);
            }
        },
        _comboWidthAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.width = props.value;
            } else {
                el.igCombo('option', 'width', props.value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_comboWidthAction', __ms);
            }
        },
        _comboHeightAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.height = props.value;
            } else {
                el.igCombo('option', 'height', props.value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_comboHeightAction', __ms);
            }
        },
        _spltBtnTooltipAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_spltBtnTooltipAction', __ms);
            }
        },
        _comboSelectedItem: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.selectedItems = [{ value: props.value }];
            } else {
                el.igCombo('option', 'selectedItems', [{ value: props.value }]);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_comboSelectedItem', __ms);
            }
        },
        _spltButtonColorAction: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.defaultColor = props.value;
            } else {
                el.igColorPickerSplitButton('option', 'defaultColor', props.value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_spltButtonColorAction', __ms);
            }
        },
        _comboDropDownListWidth: function (el, props, itemOptionObj) {
            var __start = new Date().getTime();
            if (itemOptionObj !== undefined) {
                itemOptionObj.dropDownWidth = props.value;
            } else {
                el.igCombo('option', 'dropDownWidth', props.value);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_comboDropDownListWidth', __ms);
            }
        },
        _createItems: function () {
            var __start = new Date().getTime();
            var o = this.options, i, self = this, itemProps = {}, newItem, tbItemsHash = {
                    button: 'igToolbarButton',
                    combo: 'igCombo',
                    splitButton: 'igSplitButton',
                    splitButtonColor: 'igColorPickerSplitButton'
                }, tbItemsPropsTraversing = function (key, property) {
                    var __start = new Date().getTime();
                    var scope = o.items[i].scope || self;
                    if (property.action !== undefined && $.isFunction(scope[property.action])) {
                        scope[property.action](newItem, property, itemProps);
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('tbItemsPropsTraversing', __ms);
                        }
                        return;
                    }
                    itemProps[key] = property.value;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('tbItemsPropsTraversing', __ms);
                    }
                };
            this.buttonsList.empty();
            for (i = 0; i < o.items.length; i++) {
                itemProps = {};
                newItem = (o.items[i].callbackRenderer() || $('<div tabIndex="0"></div>')).attr('id', this._id('_item_' + o.items[i].name)).appendTo(this.buttonsList);
                $.each(o.items[i].getProperties(), tbItemsPropsTraversing);
                if (tbItemsHash.hasOwnProperty(o.items[i].type)) {
                    newItem[tbItemsHash[o.items[i].type]](itemProps);
                    continue;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createItems', __ms);
            }
        },
        _updateItems: function (items) {
            var __start = new Date().getTime();
            var o = this.options, updProps, i, j, scope, el, key;
            for (i = 0; i < items.length; i++) {
                updProps = items[i].getUpdatedProperties();
                el = this.getItem(items[i].name);
                scope = o.items[i].scope || this;
                for (j = 0; j < updProps.length; j++) {
                    if (updProps[j].action !== undefined && $.isFunction(scope[updProps[j].action])) {
                        scope[updProps[j].action](el, updProps[j]);
                        continue;
                    }
                    if (items[i] instanceof $.ig.igToolbarButtonDescriptor) {
                        el.igToolbarButton('option', key, updProps[j]);
                    }
                    if (o.items[i] instanceof $.ig.igToolbarComboDescriptor) {
                        el.igCombo('option', key, updProps[j]);
                    }
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_updateItems', __ms);
            }
        },
        _getWidgetType: function (el) {
            var __start = new Date().getTime();
            var data, i;
            if (el === undefined) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_getWidgetType', __ms);
                }
                return;
            }
            data = el.data();
            for (i in data) {
                if (data.hasOwnProperty(i) && data[i].widgetName) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_getWidgetType', __ms);
                    }
                    return data[i].widgetName;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_getWidgetType', __ms);
            }
        },
        _isWidgetSupported: function (name) {
            var __start = new Date().getTime();
            var i;
            for (i = 0; i < this.supportedWidgets.length; i++) {
                if (this.supportedWidgets[i].name === name) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_isWidgetSupported', __ms);
                    }
                    return true;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_isWidgetSupported', __ms);
            }
        },
        _attachEvents: function () {
            var __start = new Date().getTime();
            var toolbarItemsEvents = 'igtoolbarbuttonclick igsplitbuttonclick igcolorpickersplitbuttoncolorselected';
            this.element.delegate('.ui-widget', toolbarItemsEvents, $.proxy(this._onToolbarItemInteraction, this));
            this.element.delegate(':ui-igCombo', 'igcomboselectionchanged', $.proxy(this._onComboListItemClick, this));
            this.collapseBtn.bind('igtoolbarbuttonclick', $.proxy(this._onCollapse, this));
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_attachEvents', __ms);
            }
        },
        _onToolbarItemInteraction: function (e, ui) {
            var __start = new Date().getTime();
            var selectedItemValue, targetWidget = $(e.target).parentsUntil(':ui-igToolbar').eq(-2), selectedItemIndex, triggeredEvent, o = this.options;
            if (targetWidget.length === 0) {
                targetWidget = $(e.target);
            }
            selectedItemIndex = this.buttonsList.children().index(targetWidget);
            switch (e.type) {
            case 'igtoolbarbuttonclick':
                triggeredEvent = this.events.toolbarButtonClick;
                break;
            default:
                triggeredEvent = this.events.toolbarCustomItemClick;
                selectedItemValue = ui.value;
                break;
            }
            this._trigger(triggeredEvent, e, {
                name: ui.name || o.items[selectedItemIndex].name,
                value: selectedItemValue,
                handler: o.items[selectedItemIndex].handler(),
                scope: o.items[selectedItemIndex].getProperty('scope'),
                itemProperties: o.items[selectedItemIndex].getProperties(),
                toolbarItem: targetWidget,
                toolbarName: o.name
            });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onToolbarItemInteraction', __ms);
            }
        },
        _onComboListItemClick: function (e, data) {
            var __start = new Date().getTime();
            var toolbarItemIndex, toolbarItem;
            toolbarItemIndex = this.buttonsList.children().index($(e.currentTarget));
            toolbarItem = this.options.items[toolbarItemIndex];
            this._trigger(this.events.toolbarComboSelected, e, {
                name: toolbarItem.name,
                value: data.items[0].value,
                handler: toolbarItem.handler(),
                scope: toolbarItem.getProperty('scope'),
                itemProperties: toolbarItem.getProperties(),
                toolbarItem: data.owner,
                toolbarName: this.options.name
            });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onComboListItemClick', __ms);
            }
        },
        getItem: function (index) {
            var __start = new Date().getTime();
            var result;
            if (!isNaN(parseInt(index, 10))) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('getItem', __ms);
                }
                return this.buttonsList.eq(index);
            }
            if (typeof index === 'string') {
                result = this.buttonsList.find('#' + this._id('_item_' + index));
                if (result.length) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('getItem', __ms);
                    }
                    return result;
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getItem', __ms);
            }
        },
        addItem: function (item) {
            var __start = new Date().getTime();
            if (this._isWidgetSupported(item.type)) {
                this.options.items.push(item);
                this._createItems();
                this._trigger(this.events.itemAdded);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('addItem', __ms);
            }
        },
        removeItem: function (index) {
            var __start = new Date().getTime();
            this.buttonsList.eq(index).remove();
            this._trigger(this.events.itemremoved);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('removeItem', __ms);
            }
        },
        disableItem: function (index, disabled) {
            var __start = new Date().getTime();
            var item = this.getItem(index), widgetType = this._getWidgetType(item);
            if (widgetType) {
                item[this._getWidgetType(item)]('option', 'disabled', disabled);
                this._trigger(this.events.itemDisable, { isDisabled: disabled });
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('disableItem', __ms);
            }
        },
        activateItem: function (index, activated) {
            var __start = new Date().getTime();
            var item = this.getItem(index), action = activated ? item.addClass : item.removeClass;
            action.call(this, 'ui-state-active');
            item.igToolbarButton('options', 'isSelected', activated);
            this._trigger(this.events.itemActivated, { isActivated: activated });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('activateItem', __ms);
            }
        },
        deactivateAll: function () {
            var __start = new Date().getTime();
            this.buttonsList.find('.ui-igbutton.ui-state-active').removeClass('ui-state-active').igToolbarButton('option', 'isSelected', false);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('deactivateAll', __ms);
            }
        },
        _setCollapseExpandButtonIcon: function () {
            var __start = new Date().getTime();
            if (this.options.collapseButtonIcon) {
                this.collapseBtn.switchClass('ui-icon-triangle-1-w', this.options.collapseButtonIcon);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setCollapseExpandButtonIcon', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            $.Widget.prototype.destroy.apply(this, arguments);
            this.element.undelegate();
            this.element.unbind();
            this.element.removeClass(this.css.toolbarWrapperConteiner).find('#' + this._id('_toolbar')).removeClass(this.css.toolbarWidget).end().find('#' + this._id('_collapseButton')).removeClass(this.css.toolbarCollapsedButton).end().find(':ui-igToolbarButton').igToolbarButton('destroy').end().find(':ui-igCombo').igCombo('destroy').end().find(':ui-igSplitButton').igSplitButton('destroy').end().find(':ui-igColorPickerSplitButton').igColorPickerSplitButton('destroy');
            delete this.buttonsList;
            delete this.collapseBtn;
            delete this.toolbarBody;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
        }
    });
    $.ig = $.ig || {};
    $.ig.igToolbarItemBaseDescriptor = Class.extend({
        settings: {
            width: null,
            height: null,
            props: { scope: { value: null } }
        },
        _updatedProperties: [],
        init: function (item) {
            var __start = new Date().getTime();
            this.settings = $.extend(true, {}, this.settings, item);
            this.name = item.name;
            this.type = item.type;
            if (this.settings.scope) {
                this.settings.props.scope = this.settings.scope;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        },
        updateProperty: function (name, value) {
            var __start = new Date().getTime();
            this.settings.props[name].value = value;
            this._updatedProperties.push(this.settings.props[name]);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('updateProperty', __ms);
            }
        },
        getProperty: function (name) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getProperty', __ms);
            }
            return this.settings.props[name];
        },
        getUpdatedProperties: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getUpdatedProperties', __ms);
            }
            return this._updatedProperties;
        },
        getProperties: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('getProperties', __ms);
            }
            return this.settings.props;
        },
        callbackRenderer: function () {
            var __start = new Date().getTime();
            if (this.settings.callbackRenderer && $.isFunction(this.settings.callbackRenderer)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('callbackRenderer', __ms);
                }
                return this.settings.callbackRenderer();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('callbackRenderer', __ms);
            }
        },
        handler: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('handler', __ms);
            }
            return this.settings.handler;
        }
    });
    $.ig.igToolbarButtonDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
        settings: {
            props: {
                onlyIcons: { value: true },
                labelText: { value: '&nbsp;' }
            }
        },
        init: function (item) {
            var __start = new Date().getTime();
            this._super(item);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        }
    });
    $.ig.igToolbarSplitButtonDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
        settings: { props: { items: [] } },
        init: function (item) {
            var __start = new Date().getTime();
            this._super(item);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        }
    });
    $.ig.igToolbarComboDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
        settings: {
            props: {
                valueKey: { value: 'text' },
                textKey: { value: 'value' },
                enableCheckboxes: { value: false },
                dropDownOnFocus: { value: true },
                selectedItems: { value: [{ index: 0 }] },
                enableClearButton: { value: false },
                dataSource: { value: null },
                mode: { value: 'dropdown' },
                dropDownAsChild: { value: true },
                focusOnSelect: { value: false }
            }
        },
        init: function (item) {
            var __start = new Date().getTime();
            this._super(item);
            if (this.settings.dataSource) {
                this.settings.props.dataSource.value = this.settings.dataSource;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('init', __ms);
            }
        }
    });
    $.widget('ui.igToolbarButton', $.ui.igButton, {
        options: {
            allowToggling: true,
            isSelected: false
        },
        ENTER: 13,
        _setOption: function (name, value) {
            var __start = new Date().getTime();
            $.ui.igButton.prototype._setOption.apply(this, arguments);
            switch (name) {
            case 'allowToggling':
                this._setToggling(value);
                break;
            case 'isSelected':
                this.options.isSelected = value;
                break;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setOption', __ms);
            }
        },
        _init: function () {
            var __start = new Date().getTime();
            var self = this, o = this.options;
            $.ui.igButton.prototype._init.apply(this);
            this._isToggled = false;
            this._setToggling(this.options.allowToggling);
            this.element.bind('keypress', $.proxy(this._onEnterKey, this));
            this.element.unbind('blur');
            this.element.bind('blur', function (e) {
                var __start = new Date().getTime();
                self.element.removeClass(o.css.buttonFocusClasses);
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_init', __ms);
            }
        },
        _setToggling: function (value) {
            var __start = new Date().getTime();
            var o = this.options, self = this;
            o.allowToggling = value;
            if (o.allowToggling) {
                this.element.unbind('mouseup');
                this.element.bind('click', function () {
                    var __start = new Date().getTime();
                    if (o.isSelected) {
                        self.element.removeClass(o.css.buttonActiveClasses);
                    }
                    self.element.removeClass(o.css.buttonFocusClasses);
                    o.isSelected = !o.isSelected;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                });
            } else {
                this.element.bind('mouseup', this._events.mouseup);
                this.element.unbind('mousedown');
                this.element.bind('mousedown', this._events.mousedown);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_setToggling', __ms);
            }
        },
        toggle: function () {
            var __start = new Date().getTime();
            var self = this, e = self.element, o = this.options;
            if (o.disabled === true || o.allowToggling === false) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('toggle', __ms);
                }
                return;
            }
            o.isSelected = !o.isSelected;
            e.toggleClass(o.css.buttonActiveClasses);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('toggle', __ms);
            }
        },
        _onEnterKey: function (e) {
            var __start = new Date().getTime();
            if (e.keyCode !== this.ENTER) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_onEnterKey', __ms);
                }
                return;
            }
            this.element.mousedown();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_onEnterKey', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            $.ui.igButton.prototype.destroy.call(this);
            this.element.unbind();
            this.element.removeClass('');
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
        }
    });
    $.widget('ui.mouseWrapper', $.ui.mouse, {
        options: {
            cancel: ':input,option',
            distance: 1,
            delay: 0
        },
        events: {
            start: 'start',
            drag: 'drag',
            stop: 'stop',
            capture: 'capture'
        },
        _create: function () {
            var __start = new Date().getTime();
            var self = this, originalMouseDown = this._mouseDown;
            if ($.ig.util.isIE9) {
                this._mouseDown = function (event) {
                    var __start = new Date().getTime();
                    var originalPreventDefault = event.preventDefault, result;
                    event.preventDefault = function () {
                        var __start = new Date().getTime();
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('event.preventDefault', __ms);
                        }
                    };
                    result = originalMouseDown.apply(self, [event]);
                    event.preventDefault = originalPreventDefault;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('', __ms);
                    }
                    return result;
                };
            }
            this._mouseInit();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            this._mouseDestroy();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
            return this;
        },
        _mouseStart: function (event) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseStart', __ms);
            }
            return this._trigger(this.events.start, event);
        },
        _mouseDrag: function (event) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseDrag', __ms);
            }
            return this._trigger(this.events.drag, event);
        },
        _mouseStop: function (event) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseStop', __ms);
            }
            return this._trigger(this.events.stop, event);
        },
        _mouseCapture: function (event) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_mouseCapture', __ms);
            }
            return this._trigger(this.events.capture, event);
        }
    });
    $.widget('ui.igResponsiveContainer', {
        options: { pollingInterval: 500 },
        _createWidget: function (options, element) {
            var __start = new Date().getTime();
            this._callbacks = [];
            this._element = element;
            this._pollerHandler = $.proxy(this._pollerTick, this);
            this._startPoller();
            this._width = this._getCurrentWidth();
            this._height = this._getCurrentHeight();
            $.Widget.prototype._createWidget.apply(this, arguments);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createWidget', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            this._stopPoller();
            this._callbacks = [];
            $.Widget.prototype.destroy.call(this);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
            return this;
        },
        startPoller: function () {
            var __start = new Date().getTime();
            this._startPoller();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('startPoller', __ms);
            }
        },
        stopPoller: function () {
            var __start = new Date().getTime();
            this._stopPoller();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('stopPoller', __ms);
            }
        },
        removeCallback: function (callbackId) {
            var __start = new Date().getTime();
            if (callbackId >= 0 && callbackId < this._callbacks.length) {
                this._callbacks.splice(callbackId, 1);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('removeCallback', __ms);
            }
        },
        addCallback: function (callback, owner, reactionStep, reactionDirection) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('addCallback', __ms);
            }
            return this._callbacks.push({
                callback: callback,
                owner: owner,
                step: reactionStep,
                left: reactionDirection === 'xy' || reactionDirection === 'x',
                top: reactionDirection === 'xy' || reactionDirection === 'y',
                cWidth: this._getCurrentWidth(),
                cHeight: this._getCurrentHeight()
            }) - 1;
        },
        _startPoller: function () {
            var __start = new Date().getTime();
            this._intervalId = setInterval(this._pollerHandler, this.options.pollingInterval);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_startPoller', __ms);
            }
        },
        _stopPoller: function () {
            var __start = new Date().getTime();
            if (this._intervalId) {
                clearInterval(this._intervalId);
                delete this._intervalId;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_stopPoller', __ms);
            }
        },
        _pollerTick: function () {
            var __start = new Date().getTime();
            var nw = this._getCurrentWidth(), nh = this._getCurrentHeight(), cb, i, called = false;
            for (i = 0; i < this._callbacks.length; i++) {
                cb = this._callbacks[i];
                if (cb.left === true) {
                    if (Math.abs(cb.cWidth - nw) > cb.step) {
                        cb.callback.apply(cb.owner, [
                            nw,
                            nh
                        ]);
                        cb.cWidth = nw;
                        cb.cHeight = nh;
                        called = true;
                    }
                }
                if (cb.top === true && called === false) {
                    if (Math.abs(cb.cHeight - nh) > cb.step) {
                        cb.callback.apply(cb.owner, [
                            nw,
                            nh
                        ]);
                        cb.cWidth = nw;
                        cb.cHeight = nh;
                    }
                }
            }
            this._width = nw;
            this._height = nh;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_pollerTick', __ms);
            }
        },
        _getCurrentWidth: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_getCurrentWidth', __ms);
            }
            return this._element.offsetWidth;
        },
        _getCurrentHeight: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_getCurrentHeight', __ms);
            }
            return this._element.offsetHeight;
        }
    });
    $.extend($.ui.igResponsiveContainer, { version: '13.2.20132.2157' });
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        define('ig.ui.shared', [
            'ig.util',
            'jquery.ui.core',
            'jquery.ui.widget'
        ], function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
            return $.ui.igLoading;
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    var _attr = 'data-scroll', _stop = function (e) {
            var __start = new Date().getTime();
            try {
                e.preventDefault();
                e.stopPropagation();
            } catch (ex) {
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_stop', __ms);
            }
        }, _aNull = function (val) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_aNull', __ms);
            }
            return val === null || val === undefined || typeof val === 'number' && isNaN(val);
        }, _num = function (val) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_num', __ms);
            }
            return isNaN(val = parseInt(val, 10)) ? 0 : val;
        }, _int = function (elem, css) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_int', __ms);
            }
            return _num(elem.css(css));
        }, _draggable = function (type) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_draggable', __ms);
            }
            return type === 'draggable';
        }, _thin = function (type) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_thin', __ms);
            }
            return type === 'show';
        }, _zero = function (num) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_zero', __ms);
            }
            return isNaN(num) || num < 5;
        }, _touch = function (e) {
            var __start = new Date().getTime();
            e = e.originalEvent;
            e = e ? e.touches : null;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_touch', __ms);
            }
            return e && e.length === 1 ? e[0] : null;
        }, _src = function (e) {
            var __start = new Date().getTime();
            e = e.target;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_src', __ms);
            }
            return e.nodeName === '#text' ? e.parentNode : e;
        }, _is = function (elem, src) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_is', __ms);
            }
            return elem && (elem.has(src).length > 0 || elem[0] === src);
        }, _valid = function (elem) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_valid', __ms);
            }
            return elem && elem[0].parentNode ? elem : null;
        }, _remove = function (elem) {
            var __start = new Date().getTime();
            if (_valid(elem)) {
                elem.remove();
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_remove', __ms);
            }
        }, _find = function (notMobile) {
            var __start = new Date().getTime();
            setTimeout(function () {
                var __start = new Date().getTime();
                var m = window.Modernizr;
                if (!m || m.touch) {
                    $('body').find('[' + _attr + ']').each(function () {
                        var __start = new Date().getTime();
                        var elem = $(this), scroll = elem.data('igScroll');
                        if ((!scroll || !scroll.evts) && !elem.data('igScroll') && !elem.data('scrollview')) {
                            elem.igScroll({ _find: true });
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                    });
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            }, notMobile === true ? 1000 : 100);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_find', __ms);
            }
        };
    $.widget('ui.igScroll', {
        options: {
            thumbOpacityDrag: null,
            thumbOpacity: null,
            cancelStart: null,
            oneDirection: null,
            direction: null,
            animateShowDuration: null,
            animateHideDuration: null,
            hideThumbsDelay: null,
            hideDragThumbsDelay: null,
            xInertia: null,
            yInertia: null,
            xThumb: null,
            yThumb: null,
            xLabel: null,
            yLabel: null,
            marginLeft: null,
            marginRight: null,
            marginTop: null,
            marginBottom: null,
            xScroller: null,
            yScroller: null
        },
        events: {
            starting: null,
            started: null,
            scrolling: null,
            scrolled: null,
            stopped: null
        },
        scrollLeft: function (val) {
            var __start = new Date().getTime();
            if (_aNull(val)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('scrollLeft', __ms);
                }
                return this._getScroll(true);
            }
            this._scroll(val);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('scrollLeft', __ms);
            }
            return this;
        },
        scrollTop: function (val) {
            var __start = new Date().getTime();
            if (_aNull(val)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('scrollTop', __ms);
                }
                return this._getScroll();
            }
            this._scroll(null, val);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('scrollTop', __ms);
            }
            return this;
        },
        scrollWidth: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('scrollWidth', __ms);
            }
            return this._getScroll(true, true);
        },
        scrollHeight: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('scrollHeight', __ms);
            }
            return this._getScroll(false, true);
        },
        _create: function () {
            var __start = new Date().getTime();
            var v, key, self = this, elem = self.element, o = self.options;
            if (o._find) {
                for (key in o) {
                    if (o.hasOwnProperty(key) && _aNull(o[key])) {
                        if (_aNull(v = elem.attr('data-' + key))) {
                            v = elem.attr('data-' + key.replace('S', '-s').replace('D', '-d').replace('O', '-o').replace('R', '-r').replace('T', '-t').replace('I', '-i').replace('B', '-b').replace('L', '-l').replace('H', '-h').replace('D', '-d'));
                        }
                        if (!_aNull(v)) {
                            o[key] = v;
                        }
                    }
                }
                o.direction = o.direction || elem.attr(_attr);
            }
            v = $.ui.igScroll.defaults;
            for (key in v) {
                if (v.hasOwnProperty(key) && o[key] === null) {
                    o[key] = v[key];
                }
            }
            self._ms = elem.css('msTouchAction');
            if (self._ms) {
                setTimeout(function () {
                    var __start = new Date().getTime();
                    self._skip(0, 0, 2);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('anonymous', __ms);
                    }
                }, 10);
            }
            v = o.direction;
            self.dir = o.oneDirection && v !== 'x' && v !== 'y';
            self.evts = {
                MSPointerDown: function (e) {
                    var __start = new Date().getTime();
                    self._skip(0, 0, 2);
                    var evt = e.originalEvent;
                    if (!evt || evt.pointerType !== 2) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('MSPointerDown', __ms);
                        }
                        return;
                    }
                    e.target.msSetPointerCapture(self._pointer = evt.pointerId);
                    self.evts.touchstart(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('MSPointerDown', __ms);
                    }
                },
                MSPointerMove: function (e) {
                    var __start = new Date().getTime();
                    if (self._pointer) {
                        self._move(e);
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('MSPointerMove', __ms);
                    }
                },
                MSPointerUp: function (e) {
                    var __start = new Date().getTime();
                    if (!self._pointer) {
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('MSPointerUp', __ms);
                        }
                        return;
                    }
                    e.target.msReleasePointerCapture(self._pointer);
                    self.evts.touchend(e);
                    delete self._pointer;
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('MSPointerUp', __ms);
                    }
                },
                touchstart: function (e) {
                    var __start = new Date().getTime();
                    delete self.skip;
                    var touch = self._pointer ? e.originalEvent : _touch(e);
                    if (touch) {
                        self.x = touch.pageX;
                        self.y = touch.pageY;
                        self.click = true;
                        if (self._isCancel(o)) {
                            _stop(e);
                        }
                    } else {
                        self._move(e, 'start');
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('touchstart', __ms);
                    }
                },
                touchmove: function (e) {
                    var __start = new Date().getTime();
                    self._move(e);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('touchmove', __ms);
                    }
                },
                touchend: function (e) {
                    var __start = new Date().getTime();
                    if (!self.click) {
                        self._move(e, 'end');
                    } else if (self._isCancel(o)) {
                        $(_src(e)).trigger('mousedown').trigger('mouseup').trigger('click');
                    }
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('touchend', __ms);
                    }
                }
            };
            elem.bind(self.evts);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_create', __ms);
            }
        },
        _isCancel: function (o) {
            var __start = new Date().getTime();
            o = o.cancelStart;
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_isCancel', __ms);
            }
            return o === true || o === 'ms' && this._pointer;
        },
        _createBar: function (elem, hor, type) {
            var __start = new Date().getTime();
            var bar, thumb, border, sizeInt, span, img, iconSize = 17, thumbSize = 5, thumbDragSize = 30, thin = _thin(type), display = hor ? 'inline-block' : 'block', margin = 'margin' + (hor ? 'Top' : 'Left'), size = hor ? 'height' : 'width';
            if (thin || _draggable(type)) {
                bar = $('<span />').css({
                    position: 'absolute',
                    zIndex: _int(elem, 'zIndex') + 2,
                    background: 'transparent',
                    border: '0px',
                    opacity: 0,
                    display: 'block'
                }).addClass('ui-widget').css(size, '1px').insertAfter(elem);
                sizeInt = thin ? thumbSize : thumbDragSize;
                thumb = $('<span />').css('position', 'relative').css(size, sizeInt).css('display', 'block').appendTo(bar);
                if (thin) {
                    thumb.css('background', '#101010');
                } else {
                    bar.css('msTouchAction', 'none');
                    thumb.addClass('ui-corner-all ui-state-hover');
                    border = thumb.css('borderTopColor');
                    sizeInt = hor ? thumb[0].offsetHeight : thumb[0].offsetWidth;
                    span = $('<span />').css({
                        display: display,
                        borderStyle: 'solid',
                        borderColor: border,
                        borderWidth: hor ? '0px 1px 0px 0px' : '0px 0px 1px 0px'
                    }).addClass('ui-corner-' + (hor ? 'left' : 'top')).css(size, '100%').appendTo(thumb);
                    img = $('<span />').css('display', 'block').css(margin, Math.floor((sizeInt - iconSize) / 2) + 'px').addClass('ui-icon ui-icon-carat-1-' + (hor ? 'w' : 'n')).appendTo(span);
                    span = $('<span />').css('display', display).css(size, '100%').appendTo(thumb);
                    img = $('<span />').css('display', 'block').css(margin, Math.floor((sizeInt - iconSize) / 2) + 'px').addClass('ui-icon ui-icon-grip-dotted-' + (hor ? 'vertical' : 'horizontal')).appendTo(span);
                    span = $('<span />').css({
                        display: display,
                        borderStyle: 'solid',
                        borderColor: border,
                        borderWidth: hor ? '0px 0px 0px 1px' : '1px 0px 0px 0px'
                    }).addClass('ui-corner-' + (hor ? 'right' : 'bottom')).css(size, '100%').appendTo(thumb);
                    img = $('<span />').css('display', 'block').css(margin, Math.floor((sizeInt - iconSize) / 2) + 'px').addClass('ui-icon ui-icon-carat-1-' + (hor ? 'e' : 's')).appendTo(span);
                }
                thumb.css(margin, -(sizeInt + 1) + 'px');
            }
            if (hor) {
                this.barX = bar;
                this.thumbX = thumb;
            } else {
                this.barY = bar;
                this.thumbY = thumb;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_createBar', __ms);
            }
        },
        _bar: function (elem, hor) {
            var __start = new Date().getTime();
            var v, left, top, thumb, locElem, locBar, shiftBar, shiftX, shiftY, thumbSize, o = this.options, barMargin = 2, barSizeMargin = _num(hor ? o.marginLeft : o.marginTop), barSizeMargin2 = _num(hor ? o.marginRight : o.marginBottom), minBarSize = 4, minThumbSize = 15, bar = hor ? this.barX : this.barY, type = hor ? o.xThumb : o.yThumb, elemSize = hor ? elem[0].offsetWidth : elem[0].offsetHeight, barSize = Math.max(elemSize - barSizeMargin - barSizeMargin2, minBarSize), scrollSize = Math.max(this._getScroll(hor, true), minBarSize + barSizeMargin + barSizeMargin2);
            if (!elemSize || scrollSize - elemSize < 1) {
                if (bar) {
                    bar.remove();
                    delete this.bar;
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_bar', __ms);
                }
                return;
            }
            if (bar) {
                if (_valid(bar)) {
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('_bar', __ms);
                    }
                    return bar;
                }
                bar.insertAfter(elem);
            }
            if (!bar) {
                this._createBar(elem, hor, type);
            }
            bar = hor ? this.barX : this.barY;
            if (!bar) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_bar', __ms);
                }
                return;
            }
            thumb = hor ? this.thumbX : this.thumbY;
            if (_draggable(type) && thumb) {
                thumb.bind(this.evts);
            }
            shiftBar = (hor ? elem[0].offsetHeight : elem[0].offsetWidth) - barMargin;
            left = _int(elem, 'marginLeft') + (hor ? barSizeMargin : shiftBar);
            top = _int(elem, 'marginTop') + (hor ? shiftBar : barSizeMargin);
            bar.css({
                left: elem.css('left'),
                top: elem.css('top'),
                marginLeft: left + 'px',
                marginTop: top + 'px'
            });
            if (_thin(type)) {
                thumb.css(hor ? 'width' : 'height', Math.floor(Math.max(elemSize * elemSize / scrollSize, minThumbSize)) + 'px');
            }
            thumbSize = hor ? thumb[0].offsetWidth : thumb[0].offsetHeight;
            v = (scrollSize - barSize - barSizeMargin - barSizeMargin2 + barMargin) / (barSize - thumbSize);
            if (hor) {
                this.ratioX = v;
            } else {
                this.ratioY = v;
            }
            locElem = elem.offset();
            locBar = bar.offset();
            shiftY = locBar.top - locElem.top - (hor ? shiftBar : barSizeMargin);
            shiftX = locBar.left - locElem.left - (hor ? barSizeMargin : shiftBar);
            if (Math.abs(shiftY) > 0) {
                bar.css('marginTop', top - shiftY + _int(elem, 'borderTopWidth') + 'px');
            }
            if (Math.abs(shiftX) > 0) {
                bar.css('marginLeft', left - shiftX + _int(elem, 'borderLeftWidth') + 'px');
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_bar', __ms);
            }
            return bar;
        },
        _scroller: function (hor) {
            var __start = new Date().getTime();
            var o = this.options, div = o.direction;
            if (!this.evts || hor && div === 'y' || !hor && div === 'x') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_scroller', __ms);
                }
                return;
            }
            div = hor ? o.xScroller : o.yScroller;
            if (div && typeof div === 'string') {
                div = $(div)[0];
                if (hor) {
                    o.xScroller = div;
                } else {
                    o.yScroller = div;
                }
            }
            if (div && div.length) {
                div = div[0];
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_scroller', __ms);
            }
            return div || this.element[0];
        },
        _getScroll: function (hor, size) {
            var __start = new Date().getTime();
            var div = this._scroller(hor);
            if (!div) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_getScroll', __ms);
                }
                return 0;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_getScroll', __ms);
            }
            return hor ? size ? div.scrollWidth : div.scrollLeft : size ? div.scrollHeight : div.scrollTop;
        },
        _scroll: function (x, y) {
            var __start = new Date().getTime();
            var div = this._scroller(true);
            if (div && !this.inBarY && this.dir !== 'y' && !_aNull(x)) {
                div.scrollLeft = x;
                if (this.thumbX) {
                    this.thumbX.css('marginLeft', Math.floor(div.scrollLeft / this.ratioX) + 'px');
                }
            }
            div = this._scroller();
            if (div && !this.inBarX && this.dir !== 'x' && !_aNull(y)) {
                div.scrollTop = y;
                if (this.thumbY) {
                    this.thumbY.css('marginTop', Math.floor(div.scrollTop / this.ratioY) + 'px');
                }
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_scroll', __ms);
            }
        },
        _vis: function () {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_vis', __ms);
            }
            return this.evts && this.element[0].offsetWidth;
        },
        _inertia: function () {
            var __start = new Date().getTime();
            var self = this, arg = { owner: self }, max = 0.97, stopTimerSpeed = 0.8, x = self.speedX, y = self.speedY, o = self.options, tick = 17, rateX = Math.max(Math.min(parseFloat(o.xInertia), max), 0), rateY = Math.max(Math.min(parseFloat(o.yInertia), max), 0), speedX = (x ? x[0] + x[1] + x[2] : 0) * tick, speedY = (y ? y[0] + y[1] + y[2] : 0) * tick, left = self._getScroll(true), top = self._getScroll(), inertia = function () {
                    var __start = new Date().getTime();
                    self.timer = setTimeout(function () {
                        var __start = new Date().getTime();
                        delete self.timer;
                        arg.deltaX = -Math.floor(speedX);
                        arg.deltaY = -Math.floor(speedY);
                        if (!self._vis() || !self._trigger('scrolling', null, arg)) {
                            self._end();
                            {
                                var __ms = new Date().getTime() - __start;
                                _putstat('anonymous', __ms);
                            }
                            return;
                        }
                        left += arg.deltaX;
                        top += arg.deltaY;
                        self._scroll(Math.floor(left), Math.floor(top));
                        self._trigger('scrolled', null, arg);
                        speedY *= rateY;
                        speedX *= rateX;
                        if (Math.abs(speedY) > stopTimerSpeed && top > 0 || Math.abs(speedX) > stopTimerSpeed && left > 0) {
                            inertia();
                        } else {
                            self._end();
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('anonymous', __ms);
                        }
                    }, tick * 3);
                    {
                        var __ms = new Date().getTime() - __start;
                        _putstat('inertia', __ms);
                    }
                };
            inertia();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_inertia', __ms);
            }
        },
        _show: function (valid) {
            var __start = new Date().getTime();
            var bar, self = this, o = self.options, val = parseFloat(o.thumbOpacity), valDrag = parseFloat(o.thumbOpacityDrag), dur = valid ? 0 : _num(o.animateShowDuration), barX = _valid(self.barX), barY = _valid(self.barY);
            if (self.hiding) {
                self.hiding.stop(true);
                delete self.hiding;
            }
            if (_zero(dur)) {
                if (barX) {
                    barX.css('opacity', self.inBarX ? valDrag : val);
                }
                if (barY) {
                    barY.css('opacity', self.inBarY ? valDrag : val);
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_show', __ms);
                }
                return;
            }
            bar = barX || barY;
            if (bar) {
                self.showing = bar.animate({ opacity: val }, {
                    duration: dur,
                    complete: function () {
                        var __start = new Date().getTime();
                        delete self.showing;
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('complete', __ms);
                        }
                    },
                    step: function (now) {
                        var __start = new Date().getTime();
                        if (barX && barY) {
                            barY.css('opacity', now);
                        }
                        {
                            var __ms = new Date().getTime() - __start;
                            _putstat('step', __ms);
                        }
                    }
                });
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_show', __ms);
            }
        },
        _hide: function (hide) {
            var __start = new Date().getTime();
            var self = this;
            if (!self.time) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_hide', __ms);
                }
                return;
            }
            if (self.showing) {
                self.showing.stop(true);
                delete self.showing;
            }
            setTimeout(function () {
                var __start = new Date().getTime();
                if (self.hiding || hide) {
                    _remove(self.barX);
                    _remove(self.barY);
                    delete self.hiding;
                    self._fixSB();
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            }, 0);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_hide', __ms);
            }
        },
        _end: function () {
            var __start = new Date().getTime();
            var self = this, o = self.options, delay = self.thumbX && _draggable(o.xThumb) || self.thumbY && _draggable(o.yThumb), dur = _num(o.animateHideDuration);
            self._trigger('stopped', null, { owner: self });
            if (self.skip || !self._vis()) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_end', __ms);
                }
                return self._hide(true);
            }
            delay = _num(delay ? o.hideDragThumbsDelay : o.hideThumbsDelay);
            self.timerEnd = setTimeout(function () {
                var __start = new Date().getTime();
                if (!self.timer && self.timerEnd) {
                    if (_zero(dur)) {
                        self._hide(true);
                    } else {
                        var bar = _valid(self.barX), bar2 = _valid(self.barY);
                        if (!bar) {
                            bar = bar2;
                            bar2 = null;
                        }
                        if (bar) {
                            self.hiding = bar.animate({ opacity: 0 }, {
                                duration: dur,
                                complete: function () {
                                    var __start = new Date().getTime();
                                    self._hide();
                                    {
                                        var __ms = new Date().getTime() - __start;
                                        _putstat('complete', __ms);
                                    }
                                },
                                step: function (now) {
                                    var __start = new Date().getTime();
                                    if (bar2) {
                                        bar2.css('opacity', now);
                                    }
                                    if (self.skip && self.hiding) {
                                        self.hiding.stop();
                                    }
                                    {
                                        var __ms = new Date().getTime() - __start;
                                        _putstat('step', __ms);
                                    }
                                }
                            });
                        }
                    }
                }
                delete self.timerEnd;
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('anonymous', __ms);
                }
            }, _zero(delay) ? 5 : delay);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_end', __ms);
            }
        },
        _clear: function () {
            var __start = new Date().getTime();
            if (this.timer) {
                clearTimeout(this.timer);
                delete this.timer;
            }
            if (this.timerEnd) {
                clearTimeout(this.timerEnd);
                delete this.timerEnd;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_clear', __ms);
            }
        },
        _fire: function (t, e, x, y) {
            var __start = new Date().getTime();
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_fire', __ms);
            }
            return this._trigger(t, e, {
                owner: this,
                left: x,
                top: y
            });
        },
        _skip: function (x, y, ms) {
            var __start = new Date().getTime();
            var dir = this.options.direction, left = this._scroller(true) || 0, top = this._scroller() || 0, height = 0, width = 0, heightScroll = 0, widthScroll = 0;
            if (left) {
                width = left.clientWidth + (ms || 0);
                widthScroll = left.scrollWidth;
                left = left.scrollLeft;
            }
            if (top) {
                height = top.clientHeight + (ms || 0);
                heightScroll = top.scrollHeight;
                top = top.scrollTop;
            }
            if ((dir === 'y' || width >= widthScroll) && (dir === 'x' || height >= heightScroll)) {
                if (ms && this._ms !== 'auto') {
                    this.element.css('msTouchAction', this._ms = 'auto');
                }
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_skip', __ms);
                }
                return true;
            }
            if (ms && this._ms !== 'none') {
                this.element.css('msTouchAction', this._ms = 'none');
            }
            if ((Math.abs(y) > Math.abs(x) || dir === 'y') && dir !== 'x') {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_skip', __ms);
                }
                return y > 0 && !top || y < 0 && top + height >= heightScroll;
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_skip', __ms);
            }
            return x > 0 && !left || x < 0 && left + width >= widthScroll;
        },
        _fixSB: function (hide) {
            var __start = new Date().getTime();
            var vert, hor, on = this._on;
            if (hide && on || !on && !hide) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_fixSB', __ms);
                }
                return;
            }
            vert = this._scroller();
            hor = this._scroller(true);
            if (on) {
                if (vert && !_aNull(on.y)) {
                    vert.style.overflowY = on.y;
                }
                if (hor && !_aNull(on.x)) {
                    hor.style.overflowX = on.x;
                }
                delete this._on;
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_fixSB', __ms);
                }
                return;
            }
            on = this._on = {};
            if (vert) {
                on.y = $(vert).css('overflowY');
                vert.style.overflowY = 'hidden';
            }
            if (hor) {
                on.x = $(hor).css('overflowX');
                hor.style.overflowX = 'hidden';
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_fixSB', __ms);
            }
        },
        _move: function (evt, end) {
            var __start = new Date().getTime();
            if (!this.evts) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_move', __ms);
                }
                return;
            }
            var speed, arg = { owner: this }, time = new Date().getTime(), self = this, maxSpeed = 3, oldX = self.x0, oldY = self.y0, speedX = self.speedX, speedY = self.speedY, oldTop = self.top, oldLeft = self.left, inBarY = self.inBarY, inBarX = self.inBarX, barX = self.barX, barY = self.barY, start = !self.drag, elem = self.element, touch = self._pointer ? evt.originalEvent : _touch(evt), x = touch ? touch.pageX : 0, y = touch ? touch.pageY : 0, src = _src(evt);
            if (self.click && self._pointer && Math.abs(self.x - x) < 3 && Math.abs(self.y - y) < 3) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_move', __ms);
                }
                return;
            }
            delete self.click;
            if (self.skip) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_move', __ms);
                }
                return;
            }
            self._fixSB(true);
            self._clear();
            if (end || !touch) {
                if (!self.skip && end === 'end' && !start) {
                    if (self.inBarX || self.inBarY) {
                        self._end();
                    } else {
                        self._inertia();
                    }
                }
                delete self.drag;
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_move', __ms);
                }
                return;
            }
            if (start) {
                self.skip = self._skip(x - self.x, y - self.y);
                if (self.skip) {
                    self._end();
                }
            } else {
                arg.deltaX = self.x - x;
                arg.deltaY = self.y - y;
            }
            if (self.skip || !this._trigger(start ? 'starting' : 'scrolling', evt, arg)) {
                {
                    var __ms = new Date().getTime() - __start;
                    _putstat('_move', __ms);
                }
                return;
            }
            if (start) {
                speed = _valid(barX) || _valid(barY);
                oldX = self.x0 = x;
                oldLeft = self.left = self._getScroll(true);
                delete self.speedX;
                barX = self._bar(elem, true);
                inBarX = self.inBarX = _is(barX, src);
                oldY = self.y0 = y;
                oldTop = self.top = self._getScroll();
                delete self.speedY;
                barY = self._bar(elem);
                inBarY = self.inBarY = _is(barY, src);
                self._show(speed || inBarX || inBarY);
            } else {
                x = self.x - arg.deltaX;
                speed = (x - self.x) / (time - self.time);
                if (Math.abs(speed) > maxSpeed) {
                    speed = speed > 0 ? maxSpeed : -maxSpeed;
                }
                if (!speedX) {
                    self.speedX = [
                        0,
                        0,
                        speed
                    ];
                } else {
                    speedX[0] = speedX[1];
                    speedX[1] = speedX[2];
                    speedX[2] = speed;
                }
                y = self.y - arg.deltaY;
                speed = (y - self.y) / (time - self.time);
                if (Math.abs(speed) > maxSpeed) {
                    speed = speed > 0 ? maxSpeed : -maxSpeed;
                }
                if (!speedY) {
                    self.speedY = [
                        0,
                        0,
                        speed
                    ];
                    if (self.dir) {
                        self.dir = Math.abs(speed) >= Math.abs(self.speedX[2]) ? 'y' : 'x';
                    }
                } else {
                    speedY = self.speedY = [
                        0,
                        0,
                        speed
                    ];
                    speedY[0] = speedY[1];
                    speedY[1] = speedY[2];
                    speedY[2] = speed;
                }
            }
            self.drag = true;
            self.x = x;
            self.y = y;
            self.time = time;
            _stop(evt);
            x = inBarX ? oldLeft + Math.floor((x - oldX) * self.ratioX) : oldLeft - x + oldX;
            y = inBarY ? oldTop + Math.floor((y - oldY) * self.ratioY) : oldTop - y + oldY;
            self._scroll(x, y);
            this._trigger(start ? 'started' : 'scrolled', evt);
            {
                var __ms = new Date().getTime() - __start;
                _putstat('_move', __ms);
            }
        },
        destroy: function () {
            var __start = new Date().getTime();
            if (this.evts) {
                this.element.unbind(this.evts);
                delete this.evts;
                if (this.showing) {
                    this.showing.stop(true);
                }
                if (this.hiding) {
                    this.hiding.stop(true);
                }
                this._clear();
                _remove(this.barX);
                _remove(this.barY);
                $.Widget.prototype.destroy.apply(this, arguments);
            }
            {
                var __ms = new Date().getTime() - __start;
                _putstat('destroy', __ms);
            }
            return this;
        }
    });
    $.extend($.ui.igScroll, { version: '13.2.20132.2157' });
    $.ui.igScroll.defaults = {
        thumbOpacityDrag: 1,
        thumbOpacity: 0.5,
        animateShowDuration: 300,
        animateHideDuration: 500,
        hideThumbsDelay: 200,
        hideDragThumbsDelay: 1000,
        xInertia: 0.8,
        yInertia: 0.85,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        marginBottom: 2,
        xThumb: 'show',
        yThumb: 'show'
    };
    try {
        $(':jqmData(role=\'page\')').live('pageshow', _find);
    } catch (ex) {
        _find(true);
        $(document).bind('igcontrolcreated', function (event, args) {
            var __start = new Date().getTime();
            var container = args.owner.scrollContainer();
            if (container.length === 0 && args.owner.container) {
                container = args.owner.container().find('[data-scroll]').eq(0);
            }
            container.igScroll({ _find: true });
            {
                var __ms = new Date().getTime() - __start;
                _putstat('anonymous', __ms);
            }
        });
    }
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));
(function ($) {
    var __start = new Date().getTime();
    $(document).ready(function () {
        var __start = new Date().getTime();
        var wm = $('#__ig_wm__').length > 0 ? $('#__ig_wm__') : $('<div id="__ig_wm__"></div>').appendTo(document.body);
        wm.css({
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 1000
        }).addClass('ui-igtrialwatermark');
        {
            var __ms = new Date().getTime() - __start;
            _putstat('anonymous', __ms);
        }
    });
    {
        var __ms = new Date().getTime() - __start;
        _putstat('anonymous', __ms);
    }
}(jQuery));