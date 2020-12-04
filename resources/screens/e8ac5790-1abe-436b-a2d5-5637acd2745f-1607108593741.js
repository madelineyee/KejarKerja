jQuery("#simulation")
  .on("click", ".s-e8ac5790-1abe-436b-a2d5-5637acd2745f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_1 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_12" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DDDDDD",
                        "border-right-color": "#DDDDDD",
                        "border-bottom-color": "#DDDDDD",
                        "border-left-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#DDDDDD",
                        "border-right-color": "#DDDDDD",
                        "border-bottom-color": "#DDDDDD",
                        "border-left-color": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_2 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e8ac5790-1abe-436b-a2d5-5637acd2745f #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_12" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7dfe5cef-3508-4db2-80fc-772077abbe0c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-e8ac5790-1abe-436b-a2d5-5637acd2745f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });