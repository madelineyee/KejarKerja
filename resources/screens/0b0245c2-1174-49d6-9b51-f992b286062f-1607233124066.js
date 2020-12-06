jQuery("#simulation")
  .on("click", ".s-0b0245c2-1174-49d6-9b51-f992b286062f .click", function(event, data) {
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_1 > .borderLayer": {
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2 > .backgroundLayer > .colorLayer": {
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
                    "target": [ "#s-Group_9" ],
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DDDDDD",
                        "border-right-color": "#DDDDDD",
                        "border-bottom-color": "#DDDDDD",
                        "border-left-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2 > .borderLayer": {
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#EFEFEF"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#D9D9D9",
                        "border-right-color": "#D9D9D9",
                        "border-bottom-color": "#D9D9D9",
                        "border-left-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_2 > .borderLayer": {
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
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-0b0245c2-1174-49d6-9b51-f992b286062f #s-Button_1 > .backgroundLayer > .colorLayer": {
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
                    "target": [ "#s-Group_9" ],
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/94fe5d27-2f3a-4efc-a455-7317228c45dd"
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
    } else if(jFirer.is("#s-Paragraph_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/94fe5d27-2f3a-4efc-a455-7317228c45dd"
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
    } else if(jFirer.is("#s-Paragraph_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/94fe5d27-2f3a-4efc-a455-7317228c45dd"
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/94fe5d27-2f3a-4efc-a455-7317228c45dd"
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
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/61c78fa3-e455-40be-9cfd-bcf3e3e706f5"
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
    if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_8","#s-Group_21","#s-Paragraph_28" ],
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
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "306.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "5.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
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
  });