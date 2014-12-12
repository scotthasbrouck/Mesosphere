Utils = {
    getFormData: function(formElem){
        var formData = $(formElem).serializeArray(), fileInputs = $(formElem).find("input[type=file]");

        fileInputs.each(function () {
          var fileSize = 0, fileType = '', fieldName = this.name;

          if (this.files.length > 0) {
            fileSize = this.files[0].size;
            fileType = this.files[0].type;
          }
          formData.push({name: fieldName, fileSize: fileSize, fileType: fileType, files: this.files});
        });

        return formData;
    },
    failureCallback: function(erroredFields, formHandle){
        $(".meso-error").text("");
        if (formHandle) {
            _(erroredFields).each( function( value, key, errObj ) {
                formHandle.find("#"+key+"-error").addClass("meso-error").text(value.message);
            });
        }
    },
    successCallback:function(formData, formHandle){
        if(formHandle) {
            formHandle[0].reset && formHandle[0].reset();
        }
        $(".meso-error").text("");
        $(".meso-error").removeClass("meso-error");
    }
};
