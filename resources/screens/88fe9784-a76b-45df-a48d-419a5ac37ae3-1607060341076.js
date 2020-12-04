jQuery("#simulation")
  .on("click", ".s-88fe9784-a76b-45df-a48d-419a5ac37ae3 .click", function(event, data) {
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
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DDDDDD",
                        "border-right-color": "#DDDDDD",
                        "border-bottom-color": "#DDDDDD",
                        "border-left-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1 > .borderLayer": {
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
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#777777",
                        "border-right-color": "#777777",
                        "border-bottom-color": "#777777",
                        "border-left-color": "#777777"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_1 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#777777",
                        "border-right-color": "#777777",
                        "border-bottom-color": "#777777",
                        "border-left-color": "#777777"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
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
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
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
  .on("click", ".s-88fe9784-a76b-45df-a48d-419a5ac37ae3 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Rectangle_3": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Rectangle_3 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Rectangle_4": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-88fe9784-a76b-45df-a48d-419a5ac37ae3 #s-Rectangle_4 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
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
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-88fe9784-a76b-45df-a48d-419a5ac37ae3 .pageload", function(event, data) {
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