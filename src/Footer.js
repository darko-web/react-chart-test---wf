"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-312"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"},"targets":[{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618828770164},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-317"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"},"targets":[{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618828770166},"e-86":{"id":"e-86","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-87"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65df2f8d11108e7b1e626eaf|a7d71a53-aa54-c601-4d59-7971dc84357e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65df2f8d11108e7b1e626eaf|a7d71a53-aa54-c601-4d59-7971dc84357e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1670515495875},"e-88":{"id":"e-88","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-89"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65df2f8d11108e7b1e626eaf|d502a5a6-9adf-e9c2-eca0-bf24d201b46b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65df2f8d11108e7b1e626eaf|d502a5a6-9adf-e9c2-eca0-bf24d201b46b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1670515988061},"e-207":{"id":"e-207","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-89","affectedElements":{},"duration":0}},"mediaQueries":["main","medium"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-89-p","smoothing":17,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1697722240954},"e-522":{"id":"e-522","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-523"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65df2f8d11108e7b1e626e8b|1eadf1f3-0844-92ff-2bdf-a0130d9e7f39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65df2f8d11108e7b1e626e8b|1eadf1f3-0844-92ff-2bdf-a0130d9e7f39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723727129115},"e-624":{"id":"e-624","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-625"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65df2f8d11108e7b1e626e8b|1eadf1f3-0844-92ff-2bdf-a0130d9e7ef0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65df2f8d11108e7b1e626e8b|1eadf1f3-0844-92ff-2bdf-a0130d9e7ef0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723792986040},"e-626":{"id":"e-626","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-627"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66a9045cbb7bcbf9fbfebb5a|b8b055a7-09ca-26c5-a9ed-1e490304951a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66a9045cbb7bcbf9fbfebb5a|b8b055a7-09ca-26c5-a9ed-1e490304951a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723793058699},"e-628":{"id":"e-628","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-629"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66a9045cbb7bcbf9fbfebb5a|c27d7134-f527-9b23-c59b-730751b8bc4a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66a9045cbb7bcbf9fbfebb5a|c27d7134-f527-9b23-c59b-730751b8bc4a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723793079860},"e-632":{"id":"e-632","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-633"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66a9045cbb7bcbf9fbfebb5a|4940f0b0-d950-4a42-96e7-d48bf7750db4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66a9045cbb7bcbf9fbfebb5a|4940f0b0-d950-4a42-96e7-d48bf7750db4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723793342922},"e-670":{"id":"e-670","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-671"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66a9045cbb7bcbf9fbfebb5a|a79446e2-306d-e922-4bd4-f10a3aad0e8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66a9045cbb7bcbf9fbfebb5a|a79446e2-306d-e922-4bd4-f10a3aad0e8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725021692670},"e-722":{"id":"e-722","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-723"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65df2f8d11108e7b1e626e8b|18ba0b56-f3cf-f8a5-ef24-7703231403cc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65df2f8d11108e7b1e626e8b|18ba0b56-f3cf-f8a5-ef24-7703231403cc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1730986338304},"e-1026":{"id":"e-1026","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6728c9e68e2dafb305f07003|c1a78429-cf09-85a6-1f8c-b353b75c2166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6728c9e68e2dafb305f07003|c1a78429-cf09-85a6-1f8c-b353b75c2166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741987784165},"e-1028":{"id":"e-1028","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1029"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6728c9e68e2dafb305f07003|f489f8c3-d06c-2cc1-1d63-db117a68f0de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6728c9e68e2dafb305f07003|f489f8c3-d06c-2cc1-1d63-db117a68f0de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741988138628},"e-1030":{"id":"e-1030","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-290","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1031"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6728c9e68e2dafb305f07003|6756fa55-da0e-9f6a-93bf-f23aa8e6820f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6728c9e68e2dafb305f07003|6756fa55-da0e-9f6a-93bf-f23aa8e6820f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741988149136},"e-1032":{"id":"e-1032","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1033"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6728c9e68e2dafb305f07003|f489f8c3-d06c-2cc1-1d63-db117a68f0df","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6728c9e68e2dafb305f07003|f489f8c3-d06c-2cc1-1d63-db117a68f0df","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1741988243233},"e-1078":{"id":"e-1078","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1079"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1a22e29c-11eb-f080-85c1-d0ff245f8474","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a22e29c-11eb-f080-85c1-d0ff245f8474","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1742119310300},"e-1159":{"id":"e-1159","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-290","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6728c9e68e2dafb305f07003|293f6ba3-589c-5755-a8e0-120e5e578031","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6728c9e68e2dafb305f07003|293f6ba3-589c-5755-a8e0-120e5e578031","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749558400314}},"actionLists":{"a":{"id":"a","title":"text__link-wrapper-over","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1618828773957},"a-2":{"id":"a-2","title":"text__link-wrapper-out","actionItemGroups":[{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1618828773957},"a-49":{"id":"a-49","title":"Close Sign up modal - Download report","actionItemGroups":[{"actionItems":[{"id":"a-49-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".section.is--bg-black.is--color-blue.sign-up_modal.report-download","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","d00a9043-92fc-ef2f-86ee-7114149c12ff","cb80bbbd-5048-5925-65c3-c65f3ebb2df1","131ba82f-7337-3818-7e1b-eb36c07402e6","73cb6cf1-68e2-5b79-b68d-2aabe5a776b9"]},"value":"flex"}},{"id":"a-49-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section.is--bg-black.is--color-blue.sign-up_modal.report-download","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","d00a9043-92fc-ef2f-86ee-7114149c12ff","cb80bbbd-5048-5925-65c3-c65f3ebb2df1","131ba82f-7337-3818-7e1b-eb36c07402e6","73cb6cf1-68e2-5b79-b68d-2aabe5a776b9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-49-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".section.is--bg-black.is--color-blue.sign-up_modal.report-download","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","d00a9043-92fc-ef2f-86ee-7114149c12ff","cb80bbbd-5048-5925-65c3-c65f3ebb2df1","131ba82f-7337-3818-7e1b-eb36c07402e6","73cb6cf1-68e2-5b79-b68d-2aabe5a776b9"]},"value":"none"}},{"id":"a-49-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"PARENT","selector":".section.is--bg-black.is--color-blue.sign-up_modal.report-download","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","d00a9043-92fc-ef2f-86ee-7114149c12ff","cb80bbbd-5048-5925-65c3-c65f3ebb2df1","131ba82f-7337-3818-7e1b-eb36c07402e6","73cb6cf1-68e2-5b79-b68d-2aabe5a776b9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1657544814189},"a-48":{"id":"a-48","title":"Open Sign up modal - CTO Signup","actionItemGroups":[{"actionItems":[{"id":"a-48-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":"none"}},{"id":"a-48-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-48-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":"flex"}},{"id":"a-48-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1657544457072},"a-89":{"id":"a-89","title":"Footer lines grow animation","continuousParameterGroups":[{"id":"a-89-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-89-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-89-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-89-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-89-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-34":{"id":"a-34","title":"page-loader__animation-simple","actionItemGroups":[{"actionItems":[{"id":"a-34-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".h1","selectorGuids":["6c6ee977-1935-2d7d-ae93-5860b574f4fc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|811baadb-5e4d-d15b-bb87-5b44eeb9788c"},"value":1,"unit":""}},{"id":"a-34-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1000,"target":{"id":"3f6d62cc-b4d0-0779-20ce-315ddc3787d3"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outQuart","duration":800,"target":{"selector":".nav__brand.is--light.is--top","selectorGuids":["0cfb796c-bc58-2ee5-562b-cb7357c458cc","466517be-d744-a05c-20ef-616fd26dd4e9","7030bf09-7a31-258a-1bb2-cd39c36b64e2"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-34-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuart","duration":1200,"target":{"id":"67c5ba51ee54e5481cbd2942|811baadb-5e4d-d15b-bb87-5b44eeb9788d"},"value":1,"unit":""}},{"id":"a-34-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"outQuart","duration":2000,"target":{"selector":".h1","selectorGuids":["6c6ee977-1935-2d7d-ae93-5860b574f4fc"]},"value":1,"unit":""}},{"id":"a-34-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|daf43904-fd40-d78e-e229-f34ba29c35fc"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1620829987877},"a-125":{"id":"a-125","title":"Footer lines grow animation 4","continuousParameterGroups":[{"id":"a-125-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-125-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626e8b|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-125-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626e8b|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-125-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626e8b|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-125-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626e8b|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-142":{"id":"a-142","title":"page-loader__animation-studio","actionItemGroups":[{"actionItems":[{"id":"a-142-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav__brand.is--light.is--top","selectorGuids":["0cfb796c-bc58-2ee5-562b-cb7357c458cc","466517be-d744-a05c-20ef-616fd26dd4e9","7030bf09-7a31-258a-1bb2-cd39c36b64e2"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-142-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626efd|9d561996-327f-78c2-10fd-6f8b51d33ce0"},"value":0,"unit":""}},{"id":"a-142-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626efd|9d561996-327f-78c2-10fd-6f8b51d33ce4"},"value":0,"unit":""}},{"id":"a-142-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626efd|efc6da6b-be4a-0b3b-a2df-ff2cc41eae86"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-142-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuart","duration":800,"target":{"selector":".section.is--nav","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","e3a491f3-342f-80b0-3b9a-4fa18f144d10"]},"value":1,"unit":""}},{"id":"a-142-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outQuart","duration":800,"target":{"selector":".nav__brand.is--light.is--top","selectorGuids":["0cfb796c-bc58-2ee5-562b-cb7357c458cc","466517be-d744-a05c-20ef-616fd26dd4e9","7030bf09-7a31-258a-1bb2-cd39c36b64e2"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-142-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"inQuad","duration":800,"target":{"id":"65df2f8d11108e7b1e626efd|9d561996-327f-78c2-10fd-6f8b51d33ce0"},"value":1,"unit":""}},{"id":"a-142-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626efd|efc6da6b-be4a-0b3b-a2df-ff2cc41eae86"},"value":1,"unit":""}},{"id":"a-142-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"","duration":500,"target":{"id":"65df2f8d11108e7b1e626efd|9d561996-327f-78c2-10fd-6f8b51d33ce4"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1620829987877},"a-182":{"id":"a-182","title":"Footer lines grow animation 5","continuousParameterGroups":[{"id":"a-182-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-182-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66a9045cbb7bcbf9fbfebb5a|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-182-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66a9045cbb7bcbf9fbfebb5a|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-182-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66a9045cbb7bcbf9fbfebb5a|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-182-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66a9045cbb7bcbf9fbfebb5a|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-39":{"id":"a-39","title":"Close Sign up modal","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":"flex"}},{"id":"a-39-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":"none"}},{"id":"a-39-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark_ctos","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","1aed4ec6-3c00-77d2-b282-825484ebd267"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1657544814189},"a-38":{"id":"a-38","title":"Open Sign up modal","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":"none"}},{"id":"a-38-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-38-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":"flex"}},{"id":"a-38-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1657544457072},"a-209":{"id":"a-209","title":"Footer lines grow animation 6","continuousParameterGroups":[{"id":"a-209-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-209-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66d6e043cbd84d209f61b2b5|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-209-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66d6e043cbd84d209f61b2b5|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-209-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66d6e043cbd84d209f61b2b5|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-209-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"66d6e043cbd84d209f61b2b5|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-213":{"id":"a-213","title":"Footer lines grow animation 7","continuousParameterGroups":[{"id":"a-213-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-213-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6728c9e68e2dafb305f07003|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-213-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6728c9e68e2dafb305f07003|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-213-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6728c9e68e2dafb305f07003|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-213-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6728c9e68e2dafb305f07003|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-218":{"id":"a-218","title":"Footer lines grow animation 8","continuousParameterGroups":[{"id":"a-218-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-218-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67445aebebeae69dcea28420|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-218-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67445aebebeae69dcea28420|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-218-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67445aebebeae69dcea28420|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-218-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67445aebebeae69dcea28420|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-233":{"id":"a-233","title":"Footer lines grow animation 10","continuousParameterGroups":[{"id":"a-233-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-233-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6780d8fc2af07f417e412f3e|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-233-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6780d8fc2af07f417e412f3e|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-233-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6780d8fc2af07f417e412f3e|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-233-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6780d8fc2af07f417e412f3e|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-241":{"id":"a-241","title":"Footer lines grow animation 11","continuousParameterGroups":[{"id":"a-241-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-241-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-241-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-241-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-241-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372},"a-290":{"id":"a-290","title":"Open Sign up modal - Download report 2","actionItemGroups":[{"actionItems":[{"id":"a-290-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":"none"}},{"id":"a-290-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-290-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":"flex"}},{"id":"a-290-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1657544457072},"a-291":{"id":"a-291","title":"Close Sign up modal 2","actionItemGroups":[{"actionItems":[{"id":"a-291-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":"flex"}},{"id":"a-291-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-291-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":"none"}},{"id":"a-291-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"PARENT","selector":".section.signup-modal-dark","selectorGuids":["74e929d4-608d-9b13-6cd6-52b7938b50c0","12846f69-8b09-80a2-0f84-f09511141bab"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1657544814189},"a-319":{"id":"a-319","title":"Footer lines grow animation 12","continuousParameterGroups":[{"id":"a-319-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":90,"actionItems":[{"id":"a-319-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68109c9b81efb255a0113dca|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":91,"actionItems":[{"id":"a-319-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68109c9b81efb255a0113dca|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":0.5,"yValue":0.5,"locked":true}}]},{"keyframe":93.2,"actionItems":[{"id":"a-319-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68109c9b81efb255a0113dca|3ca8d139-8c24-205e-f38f-058267f2049d"},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":98,"actionItems":[{"id":"a-319-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68109c9b81efb255a0113dca|e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1697469789372}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="footer is--bg-black" tag="footer">
      <_Builtin.Block className="section is--footer-top" tag="div">
        <_Builtin.Block className="container is--default" tag="div">
          <_Builtin.Block className="footer__subscribe" tag="div">
            <_Builtin.Block className="text__body is--subscribe" tag="div">
              {
                "Subscribe to our studio newsletter and stay up-to-date on our studio and companies."
              }
            </_Builtin.Block>
            <_Builtin.Link
              className="button is--white"
              button={false}
              id="newsletter_cta"
              block="inline"
              options={{
                href: "https://builders-newsletter.beehiiv.com/subscribe",
                target: "_blank",
              }}
            >
              <_Builtin.Block
                className="button-text"
                tag="div"
                id="newsletter_cta"
              >
                {"Subscribe"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className="button__icon is--big"
                id="newsletter_cta"
                value="%3Csvg%20width%3D%2216%22%20height%3D%2212%22%20viewBox%3D%220%200%2016%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.25%203L7.16795%206.9453C7.6718%207.2812%208.3282%207.2812%208.83205%206.9453L14.75%203M2.75%2011.25H13.25C14.0784%2011.25%2014.75%2010.5784%2014.75%209.75V2.25C14.75%201.42157%2014.0784%200.75%2013.25%200.75H2.75C1.92157%200.75%201.25%201.42157%201.25%202.25V9.75C1.25%2010.5784%201.92157%2011.25%202.75%2011.25Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="bottom-stroke"
          data-w-id="e85ba051-0cb4-3d47-2cc0-3ab51c12e1d2"
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block className="section is--footer" tag="div">
        <_Builtin.Block className="footer-container" tag="div">
          <_Builtin.Block className="footer__content-wrapper" tag="div">
            <_Builtin.Block className="footer_content-left" tag="div">
              <_Builtin.Block className="footer_content_left-top" tag="div">
                <_Builtin.Block className="footer__nav-wrapper" tag="div">
                  <_Builtin.Block
                    className="nav__menu-list is--footer"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="footer__heading is--color-gray"
                      tag="h3"
                    >
                      {"Studio"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Build with us"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Our Founders"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Founder Journey"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Companies"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="nav__menu-list is--footer"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="footer__heading is--color-gray"
                      tag="h3"
                    >
                      {"CTOs"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Collective"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Join as a CTO"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Find a CTO"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="nav__menu-list is--footer"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="footer__heading is--color-gray"
                      tag="h3"
                    >
                      {"Capital"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Invest with us"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Investor House Event"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="footer__nav-wrapper" tag="div">
                  <_Builtin.Block
                    className="nav__menu-list is--footer"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="footer__heading is--color-gray"
                      tag="h3"
                    >
                      {"About"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Our Team"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Our Navigators"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu innactive hide"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer innactive"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Our Story"}
                        <br />
                        {"‍"}
                        <_Builtin.Span className="link-span">
                          {"(coming soon)"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="nav__menu-list is--footer"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="footer__heading is--color-gray"
                      tag="h3"
                    >
                      {"Resources"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu innactive hide"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer innactive"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Blog"}
                        <br />
                        {"‍"}
                        <_Builtin.Span className="link-span">
                          {"(coming soon)"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "https://www.youtube.com/@playpod_",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Podcast"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="footer__nav-wrapper" tag="div">
                  <_Builtin.Block
                    className="nav__menu-list is--footer"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="footer__heading is--color-gray op-0"
                      tag="h3"
                    >
                      {"Other"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Contact"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Careers"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="footer_content-right" tag="div">
              <_Builtin.Block className="footer_cta_wrap" tag="div">
                <_Builtin.Block className="footer_cta_content-left" tag="div">
                  <_Builtin.Image
                    className="image-21"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/65268922e6624fed3a58d15d_%F0%9F%92%AAs.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block className="footer_cta_content-right" tag="div">
                  <_Builtin.Heading
                    className="heading__medium footer-cta-heading"
                    tag="h1"
                  >
                    {"Let's build a company"}
                    <br />
                    {"together"}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph className="text__body is--darker">
                    {
                      "We’re always looking for entrepreneurs to empower. Ready to build a SaaS company for the future of work?"
                    }
                    <br />
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className="button__wrapper justify-left"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="button is--white"
                      button={false}
                      id="main-cta-footer"
                      block="inline"
                      options={{
                        href: "https://careers.builders.studio/o/become-a-founder",
                      }}
                    >
                      <_Builtin.Block
                        className="button-text"
                        tag="div"
                        id="main-cta-footer"
                      >
                        {"Apply as a founder"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="button__icon internal"
                        id="main-cta-footer"
                        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.58579%202H0V0H12V12H10V3.41421L1.41421%2012L0%2010.5858L8.58579%202Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="footer-bottom-stroke"
              data-w-id="3ca8d139-8c24-205e-f38f-058267f2049d"
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Block className="footer__sub" tag="div">
            <_Builtin.Block className="footer__sub-links" tag="div">
              <_Builtin.Block className="other-links" tag="div">
                <_Builtin.Link
                  className="text__link-wrapper"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                    preload: "none",
                  }}
                >
                  <_Builtin.Block className="text__link footer" tag="div">
                    {"Legal"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="text__link-underline is--color-white"
                    tag="div"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="text__link-wrapper"
                  button={false}
                  block="inline"
                  options={{
                    href: "https://morrow.co/",
                    target: "_blank",
                    preload: "none",
                  }}
                >
                  <_Builtin.Block className="text__link footer" tag="div">
                    {"Morrow"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="text__link-underline is--color-white"
                    tag="div"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="text__link-wrapper"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                    preload: "none",
                  }}
                >
                  <_Builtin.Block className="text__link footer" tag="div">
                    {"Press"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="text__link-underline is--color-white"
                    tag="div"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className="text__body is--small is-copyright"
                tag="div"
              >
                {"© 2025 Builders | Rotterdam, NL"}
              </_Builtin.Block>
              <_Builtin.Block className="social-icon-links-wrap" tag="div">
                <_Builtin.Link
                  className="text__link-wrapper is--footer"
                  button={false}
                  block="inline"
                  options={{
                    href: "https://www.linkedin.com/company/builders-studio/",
                    target: "_blank",
                    preload: "none",
                  }}
                >
                  <_Builtin.Image
                    className="image-62"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/66cc42cfa6bfc9e84024d62b_linkedin%20icon%20l%20blue.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="text__link-wrapper is--footer"
                  button={false}
                  block="inline"
                  options={{
                    href: "https://www.instagram.com/builders.studio/",
                    target: "_blank",
                    preload: "none",
                  }}
                >
                  <_Builtin.Image
                    className="image-62"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/66cc435e6efbdc8eac7da953_ig%20icon%20l%20ble.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Link
              className="nav__brand is--footer"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className="nav__brand-logo"
                value="%3Csvg%20width%3D%22133%22%20height%3D%2220%22%20viewBox%3D%220%200%20133%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.9176%209.01162C8.41088%209.01162%206.37006%206.96538%206.37006%204.43104V3.64258H6.02526H5.68046V4.43104C5.68046%206.95599%203.64896%209.01162%201.13288%209.01162H0.350098V9.35892V9.70622H1.13288C3.63964%209.70622%205.68046%2011.7525%205.68046%2014.2868V15.0753H6.02526H6.37006V14.2868C6.37006%2011.7619%208.40156%209.70622%2010.9176%209.70622H11.7004V9.35892V9.01162H10.9176Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M34.1309%2012.8601V5.61377H37.5975V12.1655C37.5975%2014.6811%2038.6225%2015.9952%2041.3529%2015.9952H41.8189C44.1579%2015.9952%2046.1428%2014.4183%2046.1428%2011.5929V5.61377H49.6187V18.5671H46.1428V16.4927C45.0618%2017.8912%2043.3658%2018.8205%2040.8218%2018.8205C36.5444%2018.8205%2034.1309%2016.5959%2034.1309%2012.8601Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M53.104%205.61394H56.5799V18.5672H53.104V5.61394ZM53.104%203.93376H56.5799V0.432617H53.104V3.93376Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M60.0186%200.432617H63.4945V18.5672H60.0186V0.432617Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M66.1313%2012.0905C66.1313%208.1294%2069.6073%205.36039%2074.1828%205.36039C77.3699%205.36039%2079.3548%206.49615%2080.3053%207.4348V0.441895H83.7812V18.5671H80.3053V16.596C78.9727%2018.0227%2076.8294%2018.8206%2074.1362%2018.8206C69.4675%2018.8206%2066.1313%2016.4364%2066.1313%2012.0905ZM75.0215%2015.9952C78.2086%2015.9952%2080.296%2014.4183%2080.296%2012.0811C80.296%209.75325%2078.2179%208.16694%2075.0215%208.16694H74.5556C71.6015%208.16694%2069.6445%209.74387%2069.6445%2012.0811C69.6445%2014.4089%2071.6015%2015.9952%2074.5556%2015.9952H75.0215Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M102.931%2013.2263H90.1273C90.6958%2014.9628%2092.4384%2015.9953%2094.7775%2015.9953H95.2434C97.5545%2015.9953%2098.6914%2015.2162%2099.1014%2014.4653H102.801C102.316%2016.7181%20100.08%2018.8206%2095.0104%2018.8206C89.8944%2018.8206%2086.4185%2016.3051%2086.4185%2011.8747C86.4185%207.70707%2090.4256%205.35107%2095.0104%205.35107C100.052%205.35107%20102.931%208.17639%20102.931%2011.9591V13.2263ZM99.3064%2010.5887C99.2319%209.11504%2097.5545%208.17639%2095.2434%208.17639H94.7775C92.308%208.17639%2090.7704%209.13381%2090.2019%2010.5887H99.3064Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M117.422%2014.287H121.001C121.159%2015.2444%20122.855%2015.9953%20124.905%2015.9953H125.371C128.018%2015.9953%20128.717%2015.5541%20128.717%2014.8595C128.717%2014.3433%20128.409%2013.9303%20126.629%2013.7426L123.004%2013.3765C119.277%2013.0104%20118.196%2011.4616%20118.196%209.51866C118.196%206.6464%20120.973%205.35107%20124.98%205.35107C129.891%205.35107%20132.23%207.19082%20132.491%209.88473H128.912C128.652%208.87099%20127.58%208.17639%20125.232%208.17639H124.766C122.688%208.17639%20121.681%208.64572%20121.681%209.29338C121.681%209.83779%20121.942%2010.2226%20123.946%2010.4291L127.086%2010.7389C131.046%2011.1237%20132.23%2012.7288%20132.23%2014.7C132.23%2017.2343%20130.021%2018.8206%20125.11%2018.8206C120.432%2018.8206%20117.627%2017.0841%20117.422%2014.287Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M109.175%208.74884C109.175%207.02174%20110.564%205.61377%20112.288%205.61377H116.528V8.74884H109.175Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M109.185%205.61377H105.709V18.5671H109.185V5.61377Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M28.0827%209.20895C29.4432%208.63637%2030.7572%207.26595%2030.7572%205.21971C30.7572%202.2442%2028.2132%200.432617%2024.7372%200.432617H11.7002V4.08394C11.7002%206.11142%2013.331%207.76343%2015.3532%207.76343V4.08394V3.64278H24.1688C26.0419%203.64278%2027.0203%204.3937%2027.0203%205.68903C27.0203%207.01252%2026.0419%207.76343%2024.1688%207.76343H15.3532V10.9736H24.4297C26.4333%2010.9736%2027.5422%2011.7527%2027.5422%2013.1513C27.5422%2014.7094%2026.4333%2015.3571%2024.4297%2015.3571H15.3532V14.6625V10.983C13.3403%2010.983%2011.7002%2012.6256%2011.7002%2014.6625V18.5672H25.2032C28.6791%2018.5672%2031.2697%2016.6806%2031.2697%2013.5924C31.2697%2011.3115%2029.7787%209.67827%2028.0827%209.20895Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="explainer__gradient footer"
        value="%3Csvg%20width%3D%221440%22%20height%3D%22781%22%20viewBox%3D%220%200%201440%20781%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%221440%22%20height%3D%22782%22%20fill%3D%22url(%23paint0_radial_1774_160)%22%2F%3E%0A%3Cdefs%3E%0A%3CradialGradient%20id%3D%22paint0_radial_1774_160%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(109%20414.5)%20rotate(67.4646)%20scale(489.232%20920.371)%22%3E%0A%3Cstop%20stop-color%3D%22%233D0029%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2300051F%22%2F%3E%0A%3C%2FradialGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
