"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-823":{"id":"e-823","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-265","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-265-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1711534890916},"e-828":{"id":"e-828","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-266","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-829"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741039375391},"e-829":{"id":"e-829","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-267","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-828"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741039375396},"e-830":{"id":"e-830","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-266","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-831"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741039605041},"e-831":{"id":"e-831","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-267","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-830"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|74199be1-b4d0-fe7a-3e2c-222ac2b188c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741039605043},"e-844":{"id":"e-844","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-266","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-845"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|b1544967-76ff-b64a-ca46-a4353a0682ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|b1544967-76ff-b64a-ca46-a4353a0682ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253598926},"e-845":{"id":"e-845","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-267","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-844"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|b1544967-76ff-b64a-ca46-a4353a0682ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|b1544967-76ff-b64a-ca46-a4353a0682ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253598926},"e-846":{"id":"e-846","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-266","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|47f10269-0639-ee93-336d-7c01cd44ec85","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|47f10269-0639-ee93-336d-7c01cd44ec85","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253640424},"e-847":{"id":"e-847","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-267","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-846"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|47f10269-0639-ee93-336d-7c01cd44ec85","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|47f10269-0639-ee93-336d-7c01cd44ec85","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253640424},"e-848":{"id":"e-848","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-266","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-849"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|99c06adb-5090-5006-8ed5-20913a7f1758","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|99c06adb-5090-5006-8ed5-20913a7f1758","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253670184},"e-849":{"id":"e-849","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-267","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-848"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|99c06adb-5090-5006-8ed5-20913a7f1758","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|99c06adb-5090-5006-8ed5-20913a7f1758","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253670184},"e-850":{"id":"e-850","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-266","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-851"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|f6ccdeaa-1c3f-7643-a901-71f668e62068","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|f6ccdeaa-1c3f-7643-a901-71f668e62068","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253670676},"e-851":{"id":"e-851","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-267","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-850"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c5ba51ee54e5481cbd2942|f6ccdeaa-1c3f-7643-a901-71f668e62068","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c5ba51ee54e5481cbd2942|f6ccdeaa-1c3f-7643-a901-71f668e62068","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741253670676},"e-1128":{"id":"e-1128","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-265","affectedElements":{},"duration":0}},"mediaQueries":["main","medium"],"target":{"id":"905f6668-eeab-f733-527f-980834d3ebb1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"905f6668-eeab-f733-527f-980834d3ebb1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-265-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1742813591015}},"actionLists":{"a-265":{"id":"a-265","title":"card effect","continuousParameterGroups":[{"id":"a-265-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":15,"actionItems":[{"id":"a-265-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card._1st","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","1ba88955-8191-947f-090a-fc9c7a8477a3"]},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":20,"actionItems":[{"id":"a-265-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card._1st","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","1ba88955-8191-947f-090a-fc9c7a8477a3"]},"xValue":0.82,"yValue":0.82,"locked":true}},{"id":"a-265-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card._1st","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","1ba88955-8191-947f-090a-fc9c7a8477a3"]},"value":1,"unit":""}}]},{"keyframe":25,"actionItems":[{"id":"a-265-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card._1st","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","1ba88955-8191-947f-090a-fc9c7a8477a3"]},"value":0.4,"unit":""}}]},{"keyframe":26,"actionItems":[{"id":"a-265-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card._2nd","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","be317b67-d46c-d7dd-1fcf-615bcd28af8a"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-265-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.venture-x","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","86317272-eef2-7681-37fc-3ac1bc68bf8c"]},"value":1,"unit":""}}]},{"keyframe":28,"actionItems":[{"id":"a-265-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card._2nd","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","be317b67-d46c-d7dd-1fcf-615bcd28af8a"]},"xValue":0.85,"yValue":0.85,"locked":true}},{"id":"a-265-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.venture-x","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","86317272-eef2-7681-37fc-3ac1bc68bf8c"]},"value":0.4,"unit":""}}]},{"keyframe":36,"actionItems":[{"id":"a-265-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--third","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5f1"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-265-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.is-influentials","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","d7cfefb2-022a-db00-8839-0221dc101fb7"]},"value":1,"unit":""}}]},{"keyframe":40,"actionItems":[{"id":"a-265-n-10","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--third","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5f1"]},"xValue":0.88,"yValue":0.88,"locked":true}},{"id":"a-265-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.is-influentials","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","d7cfefb2-022a-db00-8839-0221dc101fb7"]},"value":0.4,"unit":""}}]},{"keyframe":48,"actionItems":[{"id":"a-265-n-13","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--fourth","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5f0"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-265-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.is-obeyo","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","aa31f6c9-ace8-a82e-7ef0-cab607ccf0fc"]},"value":1,"unit":""}}]},{"keyframe":49,"actionItems":[{"id":"a-265-n-14","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--fourth","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5f0"]},"xValue":0.88,"yValue":0.88,"locked":true}}]},{"keyframe":51,"actionItems":[{"id":"a-265-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.is-obeyo","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","aa31f6c9-ace8-a82e-7ef0-cab607ccf0fc"]},"value":0.4,"unit":""}}]},{"keyframe":58,"actionItems":[{"id":"a-265-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.is-wiseloop","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","decca65e-f2b6-7283-618e-9ad8af05d90c"]},"value":1,"unit":""}}]},{"keyframe":60,"actionItems":[{"id":"a-265-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--third","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5f1"]},"value":1,"unit":""}}]},{"keyframe":61,"actionItems":[{"id":"a-265-n-33","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card-inner-wrap.is-wiseloop","selectorGuids":["a3b21940-aa26-ce8d-b26c-8d36f7b88ce0","decca65e-f2b6-7283-618e-9ad8af05d90c"]},"value":0.4,"unit":""}}]},{"keyframe":61.5,"actionItems":[{"id":"a-265-n-30","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--fifth","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5e9"]},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":62,"actionItems":[{"id":"a-265-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card._1st","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","1ba88955-8191-947f-090a-fc9c7a8477a3"]},"value":0,"unit":""}},{"id":"a-265-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--third","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5f1"]},"value":0,"unit":""}}]},{"keyframe":64,"actionItems":[{"id":"a-265-n-31","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--fifth","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5e9"]},"xValue":0.88,"yValue":0.88,"locked":true}}]},{"keyframe":69,"actionItems":[{"id":"a-265-n-34","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--sixth","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5ed"]},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":72,"actionItems":[{"id":"a-265-n-35","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--sixth","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","0682f148-cb19-0df4-54a1-881f5ff3e5ed"]},"xValue":0.88,"yValue":0.88,"locked":true}}]},{"keyframe":75,"actionItems":[{"id":"a-265-n-36","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--7th","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","d906d29d-ec44-5095-d141-7bb987fe4d47"]},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":80,"actionItems":[{"id":"a-265-n-37","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stacking-card.is--7th","selectorGuids":["0682f148-cb19-0df4-54a1-881f5ff3e5e7","d906d29d-ec44-5095-d141-7bb987fe4d47"]},"xValue":0.94,"yValue":0.94,"locked":true}}]}]}],"createdOn":1711534905354},"a-266":{"id":"a-266","title":"venture large card hover in","actionItemGroups":[{"actionItems":[{"id":"a-266-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".stack-card-img-wrap","selectorGuids":["25b5f5a1-f005-192d-3a29-43d87991a3b0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-266-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutSine","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".stack-card-img-wrap","selectorGuids":["25b5f5a1-f005-192d-3a29-43d87991a3b0"]},"xValue":1.02,"yValue":1.02,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1741039378497},"a-267":{"id":"a-267","title":"venture card large hover out","actionItemGroups":[{"actionItems":[{"id":"a-267-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".stack-card-img-wrap","selectorGuids":["25b5f5a1-f005-192d-3a29-43d87991a3b0"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1741039548180}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CompaniesCards({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="hero_card-wrapper"
      data-w-id="905f6668-eeab-f733-527f-980834d3ebb1"
      tag="div"
      id="ventures"
    >
      <_Builtin.Block className="stacking-card _1st" tag="div">
        <_Builtin.Block className="stacking-card-inner-wrap eday" tag="div">
          <_Builtin.Block className="card-right" tag="div">
            <_Builtin.Block className="card_content-wrap" tag="div">
              <_Builtin.Block className="card-right-top-content" tag="div">
                <_Builtin.Image
                  className="image-114"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d720d8748485a56d0bd728_everday%20white.svg"
                />
                <_Builtin.Heading className="h3 venture-title" tag="h3">
                  {"Upskilling and reskilling, seamlessly."}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block className="card-right-bottom-content" tag="div">
                <_Builtin.Block className="venture-status-wrap" tag="div">
                  <_Builtin.Image
                    className="image-118"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67dd1983bc2c191bd8f40ad8_white%20spark%20softer.svg"
                  />
                  <_Builtin.Paragraph className="paragraph m-s">
                    {"FOUNDEDIN2024"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Link
                  className="button_m"
                  button={false}
                  id="main-cta-section"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div" id="main-cta-section">
                    {"View venture →"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="card-left" tag="div">
            <_Builtin.Block className="stack-card-img-wrap" tag="div">
              <_Builtin.Image
                className="img-card"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67c60d812cb60141e8dbf3f1_Card%20Everday%20img.avif"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="stacking-card _2nd" tag="div">
        <_Builtin.Block
          className="stacking-card-inner-wrap venture-x"
          tag="div"
        >
          <_Builtin.Block className="card-right" tag="div">
            <_Builtin.Block className="card_content-wrap" tag="div">
              <_Builtin.Block className="card-right-top-content" tag="div">
                <_Builtin.Image
                  className="image-104"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/64269f2be42bf65ebe412c49_noon%20logo%20white.svg"
                />
                <_Builtin.Heading className="h3 venture-title" tag="h3">
                  {"A science-based solution to employees’ well-being"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block className="card-right-bottom-content" tag="div">
                <_Builtin.Block className="venture-status-wrap" tag="div">
                  <_Builtin.Image
                    className="image-118"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67dd1983bc2c191bd8f40ad8_white%20spark%20softer.svg"
                  />
                  <_Builtin.Paragraph className="paragraph m-s">
                    {"INVALIDATED"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="card-left" tag="div">
            <_Builtin.Block className="stack-card-img-wrap" tag="div">
              <_Builtin.Image
                className="img-card"
                width="auto"
                height="auto"
                loading="lazy"
                alt="Noon platform, Builders Studio venture"
                src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d4943be6f5d981b5bc4366_noon%20builders%20venture.avif"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="stacking-card-bg" tag="div" />
      </_Builtin.Block>
      <_Builtin.Block className="stacking-card is--third" tag="div">
        <_Builtin.Block
          className="stacking-card-inner-wrap is-influentials"
          tag="div"
        >
          <_Builtin.Block className="card-right" tag="div">
            <_Builtin.Block className="card_content-wrap" tag="div">
              <_Builtin.Block className="card-right-top-content" tag="div">
                <_Builtin.Image
                  className="image-115"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d720d84eb472a08330e3c8_Influentials%20logo%201.svg"
                />
                <_Builtin.Heading className="h3 venture-title" tag="h3">
                  {"Where influencers and companies meet."}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block className="card-right-bottom-content" tag="div">
                <_Builtin.Block className="venture-status-wrap" tag="div">
                  <_Builtin.Image
                    className="image-118"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67dd1a0e6e3a17721a3e7bc0_spark%20cluster%20white.svg"
                  />
                  <_Builtin.Paragraph className="paragraph m-s">
                    {"EXIT2023"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Link
                  className="button_m"
                  button={false}
                  id="main-cta-section"
                  block="inline"
                  options={{
                    href: "https://www.influentials.com",
                    preload: "none",
                  }}
                >
                  <_Builtin.Block tag="div" id="main-cta-section">
                    {"Website ↗"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="card-left" tag="div">
            <_Builtin.Block className="stack-card-img-wrap" tag="div">
              <_Builtin.Image
                className="img-card"
                width="auto"
                height="auto"
                loading="lazy"
                alt="Influentials platform, Builders Studio venture"
                src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d49048b7691ea36bb759c0_influentials%20builders%20venture.avif"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="stacking-card-bg" tag="div" />
      </_Builtin.Block>
      <_Builtin.Block className="stacking-card is--fourth" tag="div">
        <_Builtin.Block className="stacking-card-inner-wrap is-obeyo" tag="div">
          <_Builtin.Block className="card-right" tag="div">
            <_Builtin.Block className="card_content-wrap" tag="div">
              <_Builtin.Block className="card-right-top-content" tag="div">
                <_Builtin.Image
                  className="image-115"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d720d8c74039c2da023462_obeyo%20logo%20white.svg"
                />
                <_Builtin.Heading className="h3 venture-title" tag="h3">
                  {"Making residential communities come to life"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block className="card-right-bottom-content" tag="div">
                <_Builtin.Block className="venture-status-wrap" tag="div">
                  <_Builtin.Image
                    className="image-118"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67dd1983bc2c191bd8f40ad8_white%20spark%20softer.svg"
                  />
                  <_Builtin.Paragraph className="paragraph m-s">
                    {"INVALIDATED"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="card-left" tag="div">
            <_Builtin.Image
              className="img-card"
              width="auto"
              height="auto"
              loading="lazy"
              alt="Obeyo platform, Builders Studio venture"
              src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d493677a03d5e7732d2310_obeyo%20builders%20venture.avif"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="stacking-card-bg" tag="div" />
      </_Builtin.Block>
      <_Builtin.Block className="stacking-card is--fifth" tag="div">
        <_Builtin.Block
          className="stacking-card-inner-wrap is-wiseloop"
          tag="div"
        >
          <_Builtin.Block className="card-right" tag="div">
            <_Builtin.Block className="card_content-wrap" tag="div">
              <_Builtin.Block className="card-right-top-content" tag="div">
                <_Builtin.Image
                  className="image-115"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/684fee1474b82a732d300c2f_cortena%20white%20logo.svg"
                />
                <_Builtin.Heading className="h3 venture-title" tag="h3">
                  {"Financial intelligence at your fingertips."}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block className="card-right-bottom-content" tag="div">
                <_Builtin.Block className="venture-status-wrap" tag="div">
                  <_Builtin.Image
                    className="image-118"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67dd1983bc2c191bd8f40ad8_white%20spark%20softer.svg"
                  />
                  <_Builtin.Paragraph className="paragraph m-s">
                    {"FOUNDEDIN2025"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Link
                  className="button_m"
                  button={false}
                  id="main-cta-section"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div" id="main-cta-section">
                    {"View venture →"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="card-left" tag="div">
            <_Builtin.Block className="stack-card-img-wrap white10" tag="div">
              <_Builtin.Image
                className="img-card"
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/684ff02532c39faab7fc393a_cortena%20builders.avif"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="stacking-card-bg" tag="div" />
      </_Builtin.Block>
      <_Builtin.Block className="stacking-card is--7th" tag="div">
        <_Builtin.Block className="stacking-card-inner-wrap avery" tag="div">
          <_Builtin.Block className="card-right" tag="div">
            <_Builtin.Block className="card_content-wrap" tag="div">
              <_Builtin.Block className="card-right-top-content" tag="div">
                <_Builtin.Image
                  className="image-117"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d720d8de4010172f083a01_Avery%20logo%20with%20avatar.svg"
                />
                <_Builtin.Heading className="h3 venture-title" tag="h3">
                  {"Intelligent, AI-powered candidate sourcing."}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block className="card-right-bottom-content" tag="div">
                <_Builtin.Block className="venture-status-wrap" tag="div">
                  <_Builtin.Image
                    className="image-118"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67dd1983bc2c191bd8f40ad8_white%20spark%20softer.svg"
                  />
                  <_Builtin.Paragraph className="paragraph m-s">
                    {"FOUNDEDIN2024"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Link
                  className="button_m"
                  button={false}
                  id="main-cta-section"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div" id="main-cta-section">
                    {"View venture →"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="card-left" tag="div">
            <_Builtin.Block className="stack-card-img-wrap" tag="div">
              <_Builtin.Image
                className="img-card"
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67c60d821106b86eaf76ff1f_Card%20Avery%20img.avif"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="stacking-card is--last" tag="div">
        <_Builtin.Block className="stacking-card-inner-wrap builders" tag="div">
          <_Builtin.Block className="card-right" tag="div">
            <_Builtin.Block className="card_content-wrap" tag="div">
              <_Builtin.Block className="card-right-top-content" tag="div">
                <_Builtin.Heading className="h2 text-align-left" tag="h2">
                  {"Your next venture"}
                </_Builtin.Heading>
                <_Builtin.Heading className="h3 venture-title" tag="h3">
                  {"Future busines or technical founders, come build with us!"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block className="card-right-bottom-content" tag="div">
                <_Builtin.Block className="venture-status-wrap" tag="div">
                  <_Builtin.Image
                    className="image-118"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67dd1983bc2c191bd8f40ad8_white%20spark%20softer.svg"
                  />
                  <_Builtin.Paragraph className="paragraph m-s">
                    {"COMINGUPNEXT"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Link
                  className="button_m"
                  button={false}
                  id="main-cta-section"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div" id="main-cta-section">
                    {"Build with us ->"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="card-left" tag="div">
            <_Builtin.Block className="stack-card-img-wrap white10" tag="div">
              <_Builtin.Image
                className="img-card border-thin"
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67f8ec9a20d227db66ef6176_Builders%20future%20product%20mockuo.avif"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
