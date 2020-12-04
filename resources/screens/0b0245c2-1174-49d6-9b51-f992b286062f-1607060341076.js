jQuery("#simulation")
  .on("click", ".s-0b0245c2-1174-49d6-9b51-f992b286062f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_4 > .borderLayer": {
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5 > .backgroundLayer > .colorLayer": {
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
                    "target": [ "#s-Group_1" ],
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DDDDDD",
                        "border-right-color": "#DDDDDD",
                        "border-bottom-color": "#DDDDDD",
                        "border-left-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5 > .borderLayer": {
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_5 > .borderLayer": {
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_4 > .backgroundLayer > .colorLayer": {
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
                    "target": [ "#s-Group_1" ],
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
    }
  })
  .on("pageload", ".s-0b0245c2-1174-49d6-9b51-f992b286062f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_16" ],
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