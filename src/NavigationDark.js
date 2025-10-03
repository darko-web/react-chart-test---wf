"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-548":{"id":"e-548","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-159","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-549"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3966","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3966","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-549":{"id":"e-549","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-152","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-548"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3966","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3966","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-550":{"id":"e-550","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-162","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-551"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-551":{"id":"e-551","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-164","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-550"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-552":{"id":"e-552","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-157","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-553"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-553":{"id":"e-553","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-151","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-552"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c396c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-554":{"id":"e-554","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-157","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-555"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-555":{"id":"e-555","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-151","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-554"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-556":{"id":"e-556","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-162","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-557"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-557":{"id":"e-557","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-164","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-556"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c397b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-558":{"id":"e-558","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-162","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-559"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-559":{"id":"e-559","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-164","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-558"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-560":{"id":"e-560","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-157","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-561"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-561":{"id":"e-561","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-151","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-560"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3986","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-562":{"id":"e-562","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-162","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-563"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-563":{"id":"e-563","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-164","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-562"}},"mediaQueries":["main"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-564":{"id":"e-564","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-157","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-565"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-565":{"id":"e-565","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-151","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-564"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7255943-115d-e7d5-86f6-f661d73c3991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723733301991},"e-568":{"id":"e-568","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-197","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-569"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-569":{"id":"e-569","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-198","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-568"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-570":{"id":"e-570","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-199","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-571"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-571":{"id":"e-571","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-200","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-570"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-572":{"id":"e-572","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-201","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-573"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-573":{"id":"e-573","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-202","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-572"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-574":{"id":"e-574","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-201","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-575"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-575":{"id":"e-575","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-202","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-574"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-576":{"id":"e-576","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-199","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-577"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-577":{"id":"e-577","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-200","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-576"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-578":{"id":"e-578","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-199","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-579"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-579":{"id":"e-579","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-200","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-578"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-580":{"id":"e-580","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-201","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-581"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-581":{"id":"e-581","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-202","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-580"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-582":{"id":"e-582","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-199","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-583"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-583":{"id":"e-583","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-200","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-582"}},"mediaQueries":["main"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-584":{"id":"e-584","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-201","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-585"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-585":{"id":"e-585","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-202","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-584"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723751477115},"e-586":{"id":"e-586","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-203","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-587"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1723753059965},"e-587":{"id":"e-587","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-586"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1723753059969}},"actionLists":{"a-159":{"id":"a-159","title":"Navbar 2 [Open Menu]","actionItemGroups":[{"actionItems":[{"id":"a-159-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-159-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-159-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-159-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-159-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-middle","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a117"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-152":{"id":"a-152","title":"Navbar 2 [Close Menu]","actionItemGroups":[{"actionItems":[{"id":"a-152-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-152-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-152-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-152-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-152-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-middle","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a117"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146},"a-162":{"id":"a-162","title":"Navbar 2 Dropdown [Open] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-162-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-162-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-162-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-162-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"value":1,"unit":""}},{"id":"a-162-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-164":{"id":"a-164","title":"Navbar 2 Dropdown [Close] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-164-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"value":0,"unit":""}},{"id":"a-164-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-164-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-157":{"id":"a-157","title":"Navbar 2 Dropdown [Open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-157-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-157-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-157-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-151":{"id":"a-151","title":"Navbar 2 Dropdown [Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-151-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-151-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-197":{"id":"a-197","title":"Navbar 2 [Open Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-197-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-197-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-197-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-197-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-197-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-middle","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a117"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-198":{"id":"a-198","title":"Navbar 2 [Close Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-198-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-198-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-198-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-bottom","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a115"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-198-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-top","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a118"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-198-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon2_line-middle","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a117"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146},"a-199":{"id":"a-199","title":"Navbar 2 Dropdown [Open] [Desktop] 3","actionItemGroups":[{"actionItems":[{"id":"a-199-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-199-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-199-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-199-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"value":1,"unit":""}},{"id":"a-199-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-200":{"id":"a-200","title":"Navbar 2 Dropdown [Close] [Desktop] 3","actionItemGroups":[{"actionItems":[{"id":"a-200-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"value":0,"unit":""}},{"id":"a-200-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-200-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-201":{"id":"a-201","title":"Navbar 2 Dropdown [Open] [Tablet] 3","actionItemGroups":[{"actionItems":[{"id":"a-201-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-201-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-201-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-202":{"id":"a-202","title":"Navbar 2 Dropdown [Close] [Tablet] 3","actionItemGroups":[{"actionItems":[{"id":"a-202-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_navbar2_dropdown-list","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a11e"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-202-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".rl-dropdown-icon","selectorGuids":["6d8b4a0b-ba2e-3e3c-cda5-ebd20a52a120"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-203":{"id":"a-203","title":"show navbar white","actionItemGroups":[{"actionItems":[{"id":"a-203-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bcc"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723745176243},"a-204":{"id":"a-204","title":"hide navbar white","actionItemGroups":[{"actionItems":[{"id":"a-204-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"id":"9522d15d-7f00-d067-b6cf-aa17d0187bcc"},"yValue":-161,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723745229439}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavigationDark({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="nav_w-dropdown white-nav"
      data-w-id="9522d15d-7f00-d067-b6cf-aa17d0187bcc"
      tag="div"
    >
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A.rl_navbar2_container%3A%3Abefore%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20backdrop-filter%3A%20blur(3px)%3B%0A%20%20%20%20z-index%3A%20-1%3B%0A%7D%0A%3C%2Fstyle%3E" />
      <_Builtin.NavbarWrapper
        className="rl_navbar2_component"
        data-w-id="9522d15d-7f00-d067-b6cf-aa17d0187bce"
        tag="div"
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        fs-scrolldisable-element="smart-nav"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: false,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block className="rl_navbar2_container white-nav" tag="div">
          <_Builtin.NavbarBrand
            className="rl_navbar2_logo-link"
            id="w-node-_9522d15d-7f00-d067-b6cf-aa17d0187bd0-d0187bcc"
            options={{
              href: "#",
            }}
          >
            <_Builtin.HtmlEmbed
              className="nav__brand-logo desktop"
              value="%3Csvg%20width%3D%22133%22%20height%3D%2220%22%20viewBox%3D%220%200%20133%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.9176%209.01162C8.41088%209.01162%206.37006%206.96538%206.37006%204.43104V3.64258H6.02526H5.68046V4.43104C5.68046%206.95599%203.64896%209.01162%201.13288%209.01162H0.350098V9.35892V9.70622H1.13288C3.63964%209.70622%205.68046%2011.7525%205.68046%2014.2868V15.0753H6.02526H6.37006V14.2868C6.37006%2011.7619%208.40156%209.70622%2010.9176%209.70622H11.7004V9.35892V9.01162H10.9176Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M34.1309%2012.8601V5.61377H37.5975V12.1655C37.5975%2014.6811%2038.6225%2015.9952%2041.3529%2015.9952H41.8189C44.1579%2015.9952%2046.1428%2014.4183%2046.1428%2011.5929V5.61377H49.6187V18.5671H46.1428V16.4927C45.0618%2017.8912%2043.3658%2018.8205%2040.8218%2018.8205C36.5444%2018.8205%2034.1309%2016.5959%2034.1309%2012.8601Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M53.104%205.61394H56.5799V18.5672H53.104V5.61394ZM53.104%203.93376H56.5799V0.432617H53.104V3.93376Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M60.0186%200.432617H63.4945V18.5672H60.0186V0.432617Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M66.1313%2012.0905C66.1313%208.1294%2069.6073%205.36039%2074.1828%205.36039C77.3699%205.36039%2079.3548%206.49615%2080.3053%207.4348V0.441895H83.7812V18.5671H80.3053V16.596C78.9727%2018.0227%2076.8294%2018.8206%2074.1362%2018.8206C69.4675%2018.8206%2066.1313%2016.4364%2066.1313%2012.0905ZM75.0215%2015.9952C78.2086%2015.9952%2080.296%2014.4183%2080.296%2012.0811C80.296%209.75325%2078.2179%208.16694%2075.0215%208.16694H74.5556C71.6015%208.16694%2069.6445%209.74387%2069.6445%2012.0811C69.6445%2014.4089%2071.6015%2015.9952%2074.5556%2015.9952H75.0215Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M102.931%2013.2263H90.1273C90.6958%2014.9628%2092.4384%2015.9953%2094.7775%2015.9953H95.2434C97.5545%2015.9953%2098.6914%2015.2162%2099.1014%2014.4653H102.801C102.316%2016.7181%20100.08%2018.8206%2095.0104%2018.8206C89.8944%2018.8206%2086.4185%2016.3051%2086.4185%2011.8747C86.4185%207.70707%2090.4256%205.35107%2095.0104%205.35107C100.052%205.35107%20102.931%208.17639%20102.931%2011.9591V13.2263ZM99.3064%2010.5887C99.2319%209.11504%2097.5545%208.17639%2095.2434%208.17639H94.7775C92.308%208.17639%2090.7704%209.13381%2090.2019%2010.5887H99.3064Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M117.422%2014.287H121.001C121.159%2015.2444%20122.855%2015.9953%20124.905%2015.9953H125.371C128.018%2015.9953%20128.717%2015.5541%20128.717%2014.8595C128.717%2014.3433%20128.409%2013.9303%20126.629%2013.7426L123.004%2013.3765C119.277%2013.0104%20118.196%2011.4616%20118.196%209.51866C118.196%206.6464%20120.973%205.35107%20124.98%205.35107C129.891%205.35107%20132.23%207.19082%20132.491%209.88473H128.912C128.652%208.87099%20127.58%208.17639%20125.232%208.17639H124.766C122.688%208.17639%20121.681%208.64572%20121.681%209.29338C121.681%209.83779%20121.942%2010.2226%20123.946%2010.4291L127.086%2010.7389C131.046%2011.1237%20132.23%2012.7288%20132.23%2014.7C132.23%2017.2343%20130.021%2018.8206%20125.11%2018.8206C120.432%2018.8206%20117.627%2017.0841%20117.422%2014.287Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M109.175%208.74884C109.175%207.02174%20110.564%205.61377%20112.288%205.61377H116.528V8.74884H109.175Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M109.185%205.61377H105.709V18.5671H109.185V5.61377Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M28.0827%209.20895C29.4432%208.63637%2030.7572%207.26595%2030.7572%205.21971C30.7572%202.2442%2028.2132%200.432617%2024.7372%200.432617H11.7002V4.08394C11.7002%206.11142%2013.331%207.76343%2015.3532%207.76343V4.08394V3.64278H24.1688C26.0419%203.64278%2027.0203%204.3937%2027.0203%205.68903C27.0203%207.01252%2026.0419%207.76343%2024.1688%207.76343H15.3532V10.9736H24.4297C26.4333%2010.9736%2027.5422%2011.7527%2027.5422%2013.1513C27.5422%2014.7094%2026.4333%2015.3571%2024.4297%2015.3571H15.3532V14.6625V10.983C13.3403%2010.983%2011.7002%2012.6256%2011.7002%2014.6625V18.5672H25.2032C28.6791%2018.5672%2031.2697%2016.6806%2031.2697%2013.5924C31.2697%2011.3115%2029.7787%209.67827%2028.0827%209.20895Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Image
              className="logomark-img"
              width="auto"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/66a8b3ec621084807643291e_builders%20letter%20mark.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.NavbarMenu
            className="rl_navbar2_menu is-page-height-tablet"
            id="w-node-_9522d15d-7f00-d067-b6cf-aa17d0187bd3-d0187bcc"
            tag="nav"
            role="navigation"
          >
            <_Builtin.DropdownWrapper
              className="rl_navbar2_menu-dropdown"
              data-w-id="9522d15d-7f00-d067-b6cf-aa17d0187bd4"
              tag="div"
              delay={100}
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="rl_navbar2_dropdwn-toggle"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="rl-dropdown-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block className="rl_navbar2_link-text" tag="div">
                  {"Studio"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="rl_navbar2_dropdown-list"
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Build with us"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Founder Journey"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Our Founders"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Navigators"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Portfolio"}
                </_Builtin.DropdownLink>
                <_Builtin.Block className="nav-dropdown-item-bg" tag="div" />
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="rl_navbar2_menu-dropdown"
              data-w-id="9522d15d-7f00-d067-b6cf-aa17d0187be3"
              tag="div"
              delay="200"
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="rl_navbar2_dropdwn-toggle"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="rl-dropdown-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block className="rl_navbar2_link-text" tag="div">
                  {"CTOCollective"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="rl_navbar2_dropdown-list"
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Join as a CTO"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Find a CTO"}
                </_Builtin.DropdownLink>
                <_Builtin.Block className="nav-dropdown-item-bg" tag="div" />
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="rl_navbar2_menu-dropdown"
              data-w-id="9522d15d-7f00-d067-b6cf-aa17d0187bee"
              tag="div"
              delay="200"
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="rl_navbar2_dropdwn-toggle"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="rl-dropdown-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block className="rl_navbar2_link-text" tag="div">
                  {"Capital"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="rl_navbar2_dropdown-list"
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Invest with us"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Investor House event"}
                </_Builtin.DropdownLink>
                <_Builtin.Block className="nav-dropdown-item-bg" tag="div" />
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="rl_navbar2_menu-dropdown"
              data-w-id="9522d15d-7f00-d067-b6cf-aa17d0187bf9"
              tag="div"
              delay="200"
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="rl_navbar2_dropdwn-toggle"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="rl-dropdown-icon"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block className="rl_navbar2_link-text" tag="div">
                  {"About"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="rl_navbar2_dropdown-list"
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Our Team"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Our Navigators"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className="rl_navbar2_dropdown-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Our Founders"}
                </_Builtin.DropdownLink>
                <_Builtin.Block className="nav-dropdown-item-bg" tag="div" />
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
          </_Builtin.NavbarMenu>
          <_Builtin.Block
            className="rl_navbar2_button-wrapper"
            id="w-node-_9522d15d-7f00-d067-b6cf-aa17d0187c06-d0187bcc"
            tag="div"
          >
            <_Builtin.Link
              className="button-nav is--white"
              button={false}
              id="main-cta-nav"
              block="inline"
              options={{
                href: "https://careers.builders.studio/o/become-a-founder",
              }}
            >
              <_Builtin.Block
                className="button-text_mobile"
                tag="div"
                id="main-cta-nav"
              >
                {"Become a founder"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className="button__icon"
                id="main-cta"
                value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.58579%202H0V0H12V12H10V3.41421L1.41421%2012L0%2010.5858L8.58579%202Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.NavbarButton className="rl_navbar2_menu-button" tag="div">
            <_Builtin.Block className="rl_menu-icon2" tag="div">
              <_Builtin.Block className="rl_menu-icon2_line-top" tag="div" />
              <_Builtin.Block className="rl_menu-icon2_line-middle" tag="div">
                <_Builtin.Block
                  className="rl_menu-icon_line-middle-inner"
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block className="rl_menu-icon2_line-bottom" tag="div" />
            </_Builtin.Block>
          </_Builtin.NavbarButton>
          <_Builtin.Block
            className="transparent-block-m2-copy-copy"
            id="w-node-_9522d15d-7f00-d067-b6cf-aa17d0187c11-d0187bcc"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20.nav__brand-logo.desktop%20%7B%0A%20%20%20%20display%3A%20block%3B%20%0A%20%20%7D%0A%20%20%0A%20%20.logomark-img%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%0A%20%20%40media%20(max-width%3A%201132px)%20and%20(min-width%3A%200px)%20%7B%0A%20%20%20%20.nav__brand-logo.desktop%20%7B%0A%20%20%20%20%20%20display%3A%20none%3B%20%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20.logomark-img%20%7B%0A%20%20%20%20%20%20display%3A%20block%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E" />
    </_Component>
  );
}
