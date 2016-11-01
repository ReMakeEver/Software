        while( (tagHeader = buff.readTagCodeAndLength()) ) { 
            tag = {
              header : tagHeader
            };
            switch( tagHeader.code ) {
              case SWFTags.FileAttributes : 
                flag =  buff.readUIntLE(32);
                fileAttrs = {}
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
    /**
       * DefineShape4 extends the capabilities of
       * DefineShape3 by using a new line style
       * record in the shape
       */
      //case SWFTags.DefineShape4 :
      //  /* id for this character */
      //  tag.ShapeId = buff.readUIntLE(16);
      //  /* bounds of the shape */
      //  tag.ShapeBounds = buff.readRect();
      //  /* bounds of the shape, excluding the strokes */
      //  tag.EdgeBounds = buff.readRect();
      //  /* reserved, must be 0 */
      //  if (0 !== buff.readBits(5))
      //    throw new Error('Reserved bit used.');
      //  /* if 1, use fill winding. >= SWF 10 */
      //  if (swf.version >= 10)
      //    tag.UsesFillWindingRule = buff.readBits(1);
      //  /**
      //   * if 1, shape contains at least one
      //   * non-scaling stroke.
      //   */
      //  tag.UsesNonScallingStrokes = buff.readBits(1);
      //  /**
      //   * if 1, shape contains at least one
      //   * scaling stroke
      //   */
      //  tag.UsesScalingStrokes = buff.readBits(1);
      //  tag.shapes = buff.readShapeWithStyle();
      //  break;
      case SWFTags.FrameLabel :
        tag.name = buff.readString()
        l = Buffer.byteLength(tag.name);
        /* check if it's an named anchor */
        if (l & (tagHeader.length - 1) != l)
          tag.anchor = buff.readUInt8();
        break;
      case SWFTags.DefineSprite :
        tag.SpriteID = buff.readUIntLE(16);
        tag.FrameCount = buff.readUIntLE(16);
        tag.ControlTags = readSWFTags(buff, swf);
        break;
      case SWFTags.ExportAssets :
        tag.count = buff.readUIntLE(16); 
        tag.assets = [];

        l = 0;

        while (l++ < tag.count)
          tag.assets.push({
            id : buff.readUIntLE(16),
            name : buff.readString()
          });
        break;
      case SWFTags.ImportAssets :
        /**
         * URL where the source SWF file can be found
         */
        tag.url = buff.readString();
        /**
         * Number of assets to import
         */
        tag.count = buff.readUIntLE(16);
        tag.assets = [];
    
