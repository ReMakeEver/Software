while( (tagHeader = buff.readTagCodeAndLength()) ) { 
    tag = {
      header : tagHeader
    };
    switch( tagHeader.code ) {
      case SWFTags.FileAttributes : 
        flag =  buff.readUIntLE(32);
        fileAttrs = {}
        
        fileAttrs.useNetwork    = tag.useNetwork    = !!(flag & 0x1);
        fileAttrs.as3           = tag.as3           = !!(flag & 0x8);
        fileAttrs.hasMetaData   = tag.hasMetaData   = !!(flag & 0x10);
        fileAttrs.useGPU        = tag.useGPU        = !!(flag & 0x20);
        fileAttrs.useDirectBit  = tag.useDirectBlit = !!(flag & 0x40);
        
        swf.fileAttributes = fileAttrs;
        break;
      case  SWFTags.Metadata :
        swf.metadata = tag.metadata = buff.readString()
        break;
      case SWFTags.SetBackgroundColor :
        tag.RGB = buff.readRGB();
        swf.backgroundColor = '#' + (tag.RGB[0]*65536 + tag.RGB[1]*256 + tag.RGB[0]).toString(16);
        break;
      case SWFTags.Protect :
        swf.protect = tagHeader.length && buff.readString();
        break;
      case SWFTags.DefineSceneAndFrameLabelData :
        sc = tag.sceneCount = buff.readEncodedU32();
        tag.scenes = [];

        while (sc--)
          tag.scenes.push({
            offset  : buff.readEncodedU32(),
            name    : buff.readString()
          });

        fc = tag.frameLabelCount = buff.readEncodedU32();
        tag.labels = [];

        while (fc--)
          tag.labels.push({
            frameNum    : buff.readEncodedU32(),
            frameLabel  : buff.readString()
          });
        break;
