import MappingTransformMixins from 'flatmate/transforms/mapping-transform-mixins';

export default DS.Transform.extend(MappingTransformMixins,{
  mapping : [
    { index : "Bund Area", name: "Bund Area 外滩" },
    { index : "Expo Area", name: "Expo Area 世博园" },
    { index : "Gubei", name: "Gubei 古北" },
    { index : "Hongkou", name: "Hongkou (SISU) 虹口/(上海外国语大学)" },
    /*{ index : "黄浦", name: "Huangpu 黄浦" },*/
    { index : "Hongqiao", name: "Hongqiao 虹桥" },
    { index : "Jing'an", name: "Jing'an 静安" },
    { index : "Jinqiao", name: "Jinqiao 金桥" },
    { index : "Minhang", name: "Minhang 闵行" },
    { index : "Old Town", name: "Old Town 老城区" },
    { index : "People's Square", name: "People's Square 人民广场" },
    { index : "Pudong", name: "Pudong 浦东" },
    { index : "Putuo", name: "Putuo 普陀" },
    { index : "Qingpu", name: "Qingpu 青浦" },
    /*{ index : "南外滩", name: "South Bund 南外滩" },*/
    { index : "Suzhou Creek", name: "Suzhou Creek 苏州河" },
    { index : "Wujiaochang", name: "Wujiaochang (Fudan/Tongji/SHUFE) 五角场/(复旦/同济/财经)" },
    { index : "Xujiahui", name: "Xujiahui (Jiaotong) 徐家汇/(交通大学)" },
    /*{ index : "Yangpu", name: "Yangpu (Fudan/Tongji Uni) 杨浦（复旦／同济）" },*/
    { index : "Zhabei", name: "Zhabei 闸北" },
    { index : "Zhongshan Park", name: "Zhongshan Park 中山公园" },
    { index : "Xintiandi", name: "Xintiandi 新天地" },
    { index : "Xuhui", name: "Xuhui 徐汇" }
  ]
});
