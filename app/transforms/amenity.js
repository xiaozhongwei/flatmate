import MappingTransformMixins from 'flatmate/transforms/mapping-transform-mixins';

export default DS.Transform.extend(MappingTransformMixins,{
  mapping : [
    { index: "WashingMachine", name: "WashingMachine", icon:'' },
    { index: "Aircon", name: "Aircon" },
    { index: "TV", name: "TV" },
    { index: "Oven", name: "Oven" },
    { index: "Dryer", name: "Dryer" },
    { index: "DVDPlayer", name: "DVDPlayer" },
    { index: "Internet", name: "Internet" },
    { index: "Security", name: "Security" },
    { index: "HealthClub", name: "HealthClub" },
    { index: "Pool", name: "Pool" },
    { index: "Balcony", name: "Balcony" },
    { index: "OutdoorSpace", name: "OutdoorSpace" },
    { index: "Elevator", name: "Elevator" }
  ]
});
