import MappingTransformMixins from 'flatmate/transforms/mapping-transform-mixins';

export default DS.Transform.extend(MappingTransformMixins,{
  mapping : [
    { index: "pending", name: "Pending", icon:'' },
    { index: "current", name: "Current" },
    { index: "unknown", name: "Unknown" }
  ]
});
