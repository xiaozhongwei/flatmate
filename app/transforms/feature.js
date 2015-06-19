import MappingTransformMixins from 'flatmate/transforms/mapping-transform-mixins';

export default DS.Transform.extend(MappingTransformMixins,{
  mapping : [
    { index: "Balcony", name: "Balcony" },
    { index: "PrivateBath", name: "PrivateBath" }
  ]
});
