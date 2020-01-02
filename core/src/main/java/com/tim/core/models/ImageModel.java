// package com.tim.core.models;
// import com.adobe.cq.export.json.ComponentExporter;
// import com.adobe.cq.export.json.ExporterConstants;

// import org.apache.sling.api.SlingHttpServletRequest;
// import org.apache.sling.models.annotations.Exporter;
// import org.apache.sling.models.annotations.Model;
// import org.apache.sling.models.annotations.Optional;
// import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

// @Model(
//     adaptables = SlingHttpServletRequest.class,
//     adapters = {ComponentExporter.class},
//     resourceType = {ImageModel.RESOURCE_TYPE}
// )
// @Exporter(
//     name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
//     extensions = ExporterConstants.SLING_MODEL_EXTENSION
// )
// public class ImageModel implements ComponentExporter {
    
//     static final String RESOURCE_TYPE = "react-typescript-demo/components/image";
    
//     @ValueMapValue @Optional
//     private String src;

//     public String getSrc() {
//         if(src != null && src.length() > 0) {
//             return src;
//         }
//         return "";
//     }
    
//     @Override
//     public String getExportedType() {
//         return RESOURCE_TYPE;
//     }

// }