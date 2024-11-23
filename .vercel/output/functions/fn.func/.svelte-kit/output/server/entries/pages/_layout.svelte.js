import { T as head, S as pop, Q as push, V as escape_html, W as attr, X as stringify, Y as ensure_array_like, Z as store_get, _ as spread_props, $ as unsubscribe_stores } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/theme.js";
import { F as Footer, a as FooterBrand, b as FooterUl, c as FooterLi } from "../../chunks/FooterUl.js";
import { u as uiHelpers } from "../../chunks/uiHelpers.svelte.js";
import { D as Darkmode } from "../../chunks/Darkmode.js";
import { N as Navbar, a as NavUl, b as NavBrand, c as NavLi } from "../../chunks/NavUl.js";
import { S as Sidebar, a as SidebarGroup, b as SidebarDropdownWrapper, c as SidebarItem } from "../../chunks/SidebarItem.js";
import { t as toUpperSnakeCase } from "../../chunks/helpers.js";
function deepMerge(target, source) {
  const merged = { ...target };
  for (const key in source) {
    if (key in target) {
      const targetValue = target[key];
      const sourceValue = source[key];
      if (sourceValue && targetValue && typeof sourceValue === "object" && typeof targetValue === "object" && !Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
        merged[key] = deepMerge(targetValue, sourceValue);
      } else if (sourceValue !== void 0) {
        merged[key] = sourceValue;
      }
    }
  }
  return merged;
}
function RunesMetaTags($$payload, $$props) {
  push();
  let {
    title,
    robots,
    description,
    keywords,
    twitter,
    og
  } = $$props;
  head($$payload, ($$payload2) => {
    if (title) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(title)}</title>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (keywords) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", keywords)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (robots !== false) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots" content="index,follow">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (twitter) {
      $$payload2.out += "<!--[-->";
      if (twitter?.card) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:card"${attr("content", twitter.card)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.handle) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:creator"${attr("content", twitter.handle)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:title"${attr("content", twitter.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.site) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:site"${attr("content", twitter.site)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:description"${attr("content", twitter.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image"${attr("content", twitter.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image:alt"${attr("content", twitter.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (og) {
      $$payload2.out += "<!--[-->";
      if (og?.url) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:url"${attr("content", og.url)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.type) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:type"${attr("content", og.type)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:title"${attr("content", og.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:description"${attr("content", og.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image"${attr("content", og.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:alt"${attr("content", og.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageWidth) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:width"${attr("content", og.imageWidth)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageHeight) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:height"${attr("content", og.imageHeight)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.siteName) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:site_name"${attr("content", og.siteName)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  pop();
}
function Runatics($$payload, $$props) {
  push();
  let { analyticsId } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script async${attr("src", `https://www.googletagmanager.com/gtag/js?id=${stringify(analyticsId)}`)}><\/script><!---->`;
  });
  if (!analyticsId) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2>You need to provide your Google Analytics ID, "ANALYTICS_ID", in .env file.</h2> <p>Please read the <a href="https://runatics.codewithshin.com/">docs</a> how to set it up.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Footer_1($$payload) {
  Footer($$payload, {
    class: "rounded-none border-t border-gray-200 shadow-none dark:border-gray-600 dark:bg-gray-950",
    footerType: "logo",
    children: ($$payload2) => {
      $$payload2.out += `<div class="sm:flex sm:items-center sm:justify-between">`;
      FooterBrand($$payload2, {
        href: "https://www.codewithshin.com/",
        name: "codewithshin.com"
      });
      $$payload2.out += `<!----> `;
      FooterUl($$payload2, {
        class: "mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            href: "https://github.com/shinokada/svelte-5-ui-lib",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Repo`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/pages/about",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
function GitHub($$payload, $$props) {
  let { size = "lg", class: className } = $$props;
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  $$payload.out += `<svg${attr("class", `${stringify(sizes[size])} ${stringify(className)}`)} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-icon="github" role="img"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>`;
}
function DynamicCodeBlockStyle($$payload, $$props) {
  push();
  let { class: className } = $$props;
  const stylesImport = /* @__PURE__ */ Object.assign({ "./highlight/styles/3024.css": () => Promise.resolve({           }), "./highlight/styles/a11y-dark.css": () => Promise.resolve({                }), "./highlight/styles/a11y-light.css": () => Promise.resolve({                 }), "./highlight/styles/agate.css": () => Promise.resolve({            }), "./highlight/styles/an-old-hope.css": () => Promise.resolve({                  }), "./highlight/styles/androidstudio.css": () => Promise.resolve({                    }), "./highlight/styles/apathy.css": () => Promise.resolve({             }), "./highlight/styles/apprentice.css": () => Promise.resolve({                 }), "./highlight/styles/arduino-light.css": () => Promise.resolve({                    }), "./highlight/styles/arta.css": () => Promise.resolve({           }), "./highlight/styles/ascetic.css": () => Promise.resolve({              }), "./highlight/styles/ashes.css": () => Promise.resolve({            }), "./highlight/styles/atelier-cave-light.css": () => Promise.resolve({                         }), "./highlight/styles/atelier-cave.css": () => Promise.resolve({                   }), "./highlight/styles/atelier-dune-light.css": () => Promise.resolve({                         }), "./highlight/styles/atelier-dune.css": () => Promise.resolve({                   }), "./highlight/styles/atelier-estuary-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-estuary.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-forest-light.css": () => Promise.resolve({                           }), "./highlight/styles/atelier-forest.css": () => Promise.resolve({                     }), "./highlight/styles/atelier-heath-light.css": () => Promise.resolve({                          }), "./highlight/styles/atelier-heath.css": () => Promise.resolve({                    }), "./highlight/styles/atelier-lakeside-light.css": () => Promise.resolve({                             }), "./highlight/styles/atelier-lakeside.css": () => Promise.resolve({                       }), "./highlight/styles/atelier-plateau-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-plateau.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-savanna-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-savanna.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-seaside-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-seaside.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-sulphurpool-light.css": () => Promise.resolve({                                }), "./highlight/styles/atelier-sulphurpool.css": () => Promise.resolve({                          }), "./highlight/styles/atlas.css": () => Promise.resolve({            }), "./highlight/styles/atom-one-dark-reasonable.css": () => Promise.resolve({                               }), "./highlight/styles/atom-one-dark.css": () => Promise.resolve({                    }), "./highlight/styles/atom-one-light.css": () => Promise.resolve({                     }), "./highlight/styles/base16-github.css": () => Promise.resolve({                    }), "./highlight/styles/base16-ir-black.css": () => Promise.resolve({                      }), "./highlight/styles/base16-monokai.css": () => Promise.resolve({                     }), "./highlight/styles/base16-nord.css": () => Promise.resolve({                  }), "./highlight/styles/bespin.css": () => Promise.resolve({             }), "./highlight/styles/black-metal-bathory.css": () => Promise.resolve({                          }), "./highlight/styles/black-metal-burzum.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-dark-funeral.css": () => Promise.resolve({                               }), "./highlight/styles/black-metal-gorgoroth.css": () => Promise.resolve({                            }), "./highlight/styles/black-metal-immortal.css": () => Promise.resolve({                           }), "./highlight/styles/black-metal-khold.css": () => Promise.resolve({                        }), "./highlight/styles/black-metal-marduk.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-mayhem.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-nile.css": () => Promise.resolve({                       }), "./highlight/styles/black-metal-venom.css": () => Promise.resolve({                        }), "./highlight/styles/black-metal.css": () => Promise.resolve({                  }), "./highlight/styles/brewer.css": () => Promise.resolve({             }), "./highlight/styles/bright.css": () => Promise.resolve({             }), "./highlight/styles/brogrammer.css": () => Promise.resolve({                 }), "./highlight/styles/brown-paper.css": () => Promise.resolve({                  }), "./highlight/styles/brush-trees-dark.css": () => Promise.resolve({                       }), "./highlight/styles/brush-trees.css": () => Promise.resolve({                  }), "./highlight/styles/chalk.css": () => Promise.resolve({            }), "./highlight/styles/circus.css": () => Promise.resolve({             }), "./highlight/styles/classic-dark.css": () => Promise.resolve({                   }), "./highlight/styles/classic-light.css": () => Promise.resolve({                    }), "./highlight/styles/codepen-embed.css": () => Promise.resolve({                    }), "./highlight/styles/codeschool.css": () => Promise.resolve({                 }), "./highlight/styles/color-brewer.css": () => Promise.resolve({                   }), "./highlight/styles/colors.css": () => Promise.resolve({             }), "./highlight/styles/cupcake.css": () => Promise.resolve({              }), "./highlight/styles/cupertino.css": () => Promise.resolve({                }), "./highlight/styles/danqing.css": () => Promise.resolve({              }), "./highlight/styles/darcula.css": () => Promise.resolve({              }), "./highlight/styles/dark-violet.css": () => Promise.resolve({                  }), "./highlight/styles/dark.css": () => Promise.resolve({           }), "./highlight/styles/darkmoss.css": () => Promise.resolve({               }), "./highlight/styles/darktooth.css": () => Promise.resolve({                }), "./highlight/styles/decaf.css": () => Promise.resolve({            }), "./highlight/styles/default-dark.css": () => Promise.resolve({                   }), "./highlight/styles/default-light.css": () => Promise.resolve({                    }), "./highlight/styles/default.css": () => Promise.resolve({              }), "./highlight/styles/devibeans.css": () => Promise.resolve({                }), "./highlight/styles/dirtysea.css": () => Promise.resolve({               }), "./highlight/styles/docco.css": () => Promise.resolve({            }), "./highlight/styles/dracula.css": () => Promise.resolve({              }), "./highlight/styles/edge-dark.css": () => Promise.resolve({                }), "./highlight/styles/edge-light.css": () => Promise.resolve({                 }), "./highlight/styles/eighties.css": () => Promise.resolve({               }), "./highlight/styles/embers.css": () => Promise.resolve({             }), "./highlight/styles/equilibrium-dark.css": () => Promise.resolve({                       }), "./highlight/styles/equilibrium-gray-dark.css": () => Promise.resolve({                            }), "./highlight/styles/equilibrium-gray-light.css": () => Promise.resolve({                             }), "./highlight/styles/equilibrium-light.css": () => Promise.resolve({                        }), "./highlight/styles/espresso.css": () => Promise.resolve({               }), "./highlight/styles/eva-dim.css": () => Promise.resolve({              }), "./highlight/styles/eva.css": () => Promise.resolve({          }), "./highlight/styles/far.css": () => Promise.resolve({          }), "./highlight/styles/felipec.css": () => Promise.resolve({              }), "./highlight/styles/flat.css": () => Promise.resolve({           }), "./highlight/styles/foundation.css": () => Promise.resolve({                 }), "./highlight/styles/framer.css": () => Promise.resolve({             }), "./highlight/styles/fruit-soda.css": () => Promise.resolve({                 }), "./highlight/styles/gigavolt.css": () => Promise.resolve({               }), "./highlight/styles/github-dark-dimmed.css": () => Promise.resolve({                         }), "./highlight/styles/github-dark.css": () => Promise.resolve({                  }), "./highlight/styles/github.css": () => Promise.resolve({             }), "./highlight/styles/gml.css": () => Promise.resolve({          }), "./highlight/styles/google-dark.css": () => Promise.resolve({                  }), "./highlight/styles/google-light.css": () => Promise.resolve({                   }), "./highlight/styles/googlecode.css": () => Promise.resolve({                 }), "./highlight/styles/gradient-dark.css": () => Promise.resolve({                    }), "./highlight/styles/gradient-light.css": () => Promise.resolve({                     }), "./highlight/styles/grayscale-dark.css": () => Promise.resolve({                     }), "./highlight/styles/grayscale-light.css": () => Promise.resolve({                      }), "./highlight/styles/grayscale.css": () => Promise.resolve({                }), "./highlight/styles/green-screen.css": () => Promise.resolve({                   }), "./highlight/styles/gruvbox-dark-hard.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-dark-medium.css": () => Promise.resolve({                          }), "./highlight/styles/gruvbox-dark-pale.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-dark-soft.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-light-hard.css": () => Promise.resolve({                         }), "./highlight/styles/gruvbox-light-medium.css": () => Promise.resolve({                           }), "./highlight/styles/gruvbox-light-soft.css": () => Promise.resolve({                         }), "./highlight/styles/hardcore.css": () => Promise.resolve({               }), "./highlight/styles/harmonic16-dark.css": () => Promise.resolve({                      }), "./highlight/styles/harmonic16-light.css": () => Promise.resolve({                       }), "./highlight/styles/heetch-dark.css": () => Promise.resolve({                  }), "./highlight/styles/heetch-light.css": () => Promise.resolve({                   }), "./highlight/styles/helios.css": () => Promise.resolve({             }), "./highlight/styles/hopscotch.css": () => Promise.resolve({                }), "./highlight/styles/horizon-dark.css": () => Promise.resolve({                   }), "./highlight/styles/horizon-light.css": () => Promise.resolve({                    }), "./highlight/styles/humanoid-dark.css": () => Promise.resolve({                    }), "./highlight/styles/humanoid-light.css": () => Promise.resolve({                     }), "./highlight/styles/hybrid.css": () => Promise.resolve({             }), "./highlight/styles/ia-dark.css": () => Promise.resolve({              }), "./highlight/styles/ia-light.css": () => Promise.resolve({               }), "./highlight/styles/icy-dark.css": () => Promise.resolve({               }), "./highlight/styles/idea.css": () => Promise.resolve({           }), "./highlight/styles/intellij-light.css": () => Promise.resolve({                     }), "./highlight/styles/ir-black.css": () => Promise.resolve({               }), "./highlight/styles/isbl-editor-dark.css": () => Promise.resolve({                       }), "./highlight/styles/isbl-editor-light.css": () => Promise.resolve({                        }), "./highlight/styles/isotope.css": () => Promise.resolve({              }), "./highlight/styles/kimber.css": () => Promise.resolve({             }), "./highlight/styles/kimbie-dark.css": () => Promise.resolve({                  }), "./highlight/styles/kimbie-light.css": () => Promise.resolve({                   }), "./highlight/styles/lightfair.css": () => Promise.resolve({                }), "./highlight/styles/lioshi.css": () => Promise.resolve({             }), "./highlight/styles/london-tube.css": () => Promise.resolve({                  }), "./highlight/styles/macintosh.css": () => Promise.resolve({                }), "./highlight/styles/magula.css": () => Promise.resolve({             }), "./highlight/styles/marrakesh.css": () => Promise.resolve({                }), "./highlight/styles/materia.css": () => Promise.resolve({              }), "./highlight/styles/material-darker.css": () => Promise.resolve({                      }), "./highlight/styles/material-lighter.css": () => Promise.resolve({                       }), "./highlight/styles/material-palenight.css": () => Promise.resolve({                         }), "./highlight/styles/material-vivid.css": () => Promise.resolve({                     }), "./highlight/styles/material.css": () => Promise.resolve({               }), "./highlight/styles/mellow-purple.css": () => Promise.resolve({                    }), "./highlight/styles/mexico-light.css": () => Promise.resolve({                   }), "./highlight/styles/mocha.css": () => Promise.resolve({            }), "./highlight/styles/mono-blue.css": () => Promise.resolve({                }), "./highlight/styles/monokai-sublime.css": () => Promise.resolve({                      }), "./highlight/styles/monokai.css": () => Promise.resolve({              }), "./highlight/styles/nebula.css": () => Promise.resolve({             }), "./highlight/styles/night-owl.css": () => Promise.resolve({                }), "./highlight/styles/nnfx-dark.css": () => Promise.resolve({                }), "./highlight/styles/nnfx-light.css": () => Promise.resolve({                 }), "./highlight/styles/nord.css": () => Promise.resolve({           }), "./highlight/styles/nova.css": () => Promise.resolve({           }), "./highlight/styles/obsidian.css": () => Promise.resolve({               }), "./highlight/styles/ocean.css": () => Promise.resolve({            }), "./highlight/styles/oceanicnext.css": () => Promise.resolve({                  }), "./highlight/styles/one-light.css": () => Promise.resolve({                }), "./highlight/styles/onedark.css": () => Promise.resolve({              }), "./highlight/styles/outrun-dark.css": () => Promise.resolve({                  }), "./highlight/styles/panda-syntax-dark.css": () => Promise.resolve({                        }), "./highlight/styles/panda-syntax-light.css": () => Promise.resolve({                         }), "./highlight/styles/papercolor-dark.css": () => Promise.resolve({                      }), "./highlight/styles/papercolor-light.css": () => Promise.resolve({                       }), "./highlight/styles/paraiso-dark.css": () => Promise.resolve({                   }), "./highlight/styles/paraiso-light.css": () => Promise.resolve({                    }), "./highlight/styles/paraiso.css": () => Promise.resolve({              }), "./highlight/styles/pasque.css": () => Promise.resolve({             }), "./highlight/styles/phd.css": () => Promise.resolve({          }), "./highlight/styles/pico.css": () => Promise.resolve({           }), "./highlight/styles/pojoaque.css": () => Promise.resolve({               }), "./highlight/styles/pop.css": () => Promise.resolve({          }), "./highlight/styles/porple.css": () => Promise.resolve({             }), "./highlight/styles/purebasic.css": () => Promise.resolve({                }), "./highlight/styles/qtcreator-dark.css": () => Promise.resolve({                     }), "./highlight/styles/qtcreator-light.css": () => Promise.resolve({                      }), "./highlight/styles/qualia.css": () => Promise.resolve({             }), "./highlight/styles/railscasts.css": () => Promise.resolve({                 }), "./highlight/styles/rainbow.css": () => Promise.resolve({              }), "./highlight/styles/rebecca.css": () => Promise.resolve({              }), "./highlight/styles/ros-pine-dawn.css": () => Promise.resolve({                    }), "./highlight/styles/ros-pine-moon.css": () => Promise.resolve({                    }), "./highlight/styles/ros-pine.css": () => Promise.resolve({               }), "./highlight/styles/routeros.css": () => Promise.resolve({               }), "./highlight/styles/sagelight.css": () => Promise.resolve({                }), "./highlight/styles/sandcastle.css": () => Promise.resolve({                 }), "./highlight/styles/school-book.css": () => Promise.resolve({                  }), "./highlight/styles/seti-ui.css": () => Promise.resolve({              }), "./highlight/styles/shades-of-purple.css": () => Promise.resolve({                       }), "./highlight/styles/shapeshifter.css": () => Promise.resolve({                   }), "./highlight/styles/silk-dark.css": () => Promise.resolve({                }), "./highlight/styles/silk-light.css": () => Promise.resolve({                 }), "./highlight/styles/snazzy.css": () => Promise.resolve({             }), "./highlight/styles/solar-flare-light.css": () => Promise.resolve({                        }), "./highlight/styles/solar-flare.css": () => Promise.resolve({                  }), "./highlight/styles/solarized-dark.css": () => Promise.resolve({                     }), "./highlight/styles/solarized-light.css": () => Promise.resolve({                      }), "./highlight/styles/spacemacs.css": () => Promise.resolve({                }), "./highlight/styles/srcery.css": () => Promise.resolve({             }), "./highlight/styles/stackoverflow-dark.css": () => Promise.resolve({                         }), "./highlight/styles/stackoverflow-light.css": () => Promise.resolve({                          }), "./highlight/styles/summercamp.css": () => Promise.resolve({                 }), "./highlight/styles/summerfruit-dark.css": () => Promise.resolve({                       }), "./highlight/styles/summerfruit-light.css": () => Promise.resolve({                        }), "./highlight/styles/sunburst.css": () => Promise.resolve({               }), "./highlight/styles/synth-midnight-terminal-dark.css": () => Promise.resolve({                                   }), "./highlight/styles/synth-midnight-terminal-light.css": () => Promise.resolve({                                    }), "./highlight/styles/tango.css": () => Promise.resolve({            }), "./highlight/styles/tender.css": () => Promise.resolve({             }), "./highlight/styles/tokyo-night-dark.css": () => Promise.resolve({                       }), "./highlight/styles/tokyo-night-light.css": () => Promise.resolve({                        }), "./highlight/styles/tomorrow-night-blue.css": () => Promise.resolve({                          }), "./highlight/styles/tomorrow-night-bright.css": () => Promise.resolve({                            }), "./highlight/styles/tomorrow-night.css": () => Promise.resolve({                     }), "./highlight/styles/tomorrow.css": () => Promise.resolve({               }), "./highlight/styles/twilight.css": () => Promise.resolve({               }), "./highlight/styles/unikitty-dark.css": () => Promise.resolve({                    }), "./highlight/styles/unikitty-light.css": () => Promise.resolve({                     }), "./highlight/styles/vs.css": () => Promise.resolve({         }), "./highlight/styles/vs2015.css": () => Promise.resolve({             }), "./highlight/styles/vulcan.css": () => Promise.resolve({             }), "./highlight/styles/windows-10-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-10.css": () => Promise.resolve({                 }), "./highlight/styles/windows-95-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-95.css": () => Promise.resolve({                 }), "./highlight/styles/windows-high-contrast-light.css": () => Promise.resolve({                                  }), "./highlight/styles/windows-high-contrast.css": () => Promise.resolve({                            }), "./highlight/styles/windows-nt-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-nt.css": () => Promise.resolve({                 }), "./highlight/styles/woodland.css": () => Promise.resolve({               }), "./highlight/styles/xcode-dusk.css": () => Promise.resolve({                 }), "./highlight/styles/xcode.css": () => Promise.resolve({            }), "./highlight/styles/xt256.css": () => Promise.resolve({            }), "./highlight/styles/zenburn.css": () => Promise.resolve({              }) });
  toUpperSnakeCase("svelte-5-ui-lib") + "_CODE_BLOCK_STYLE";
  const styles = Object.entries(stylesImport).map(([path]) => ({
    value: path.slice(path.lastIndexOf("/") + 1, -4),
    name: path.slice(path.lastIndexOf("/") + 1, -4)
  }));
  const each_array = ensure_array_like(styles);
  $$payload.out += `<select${attr("class", `w-48 border border-gray-200 p-1 text-gray-800 dark:text-gray-800 ${stringify(className)}`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let theme = each_array[$$index];
    $$payload.out += `<option${attr("value", theme.value)}>${escape_html(theme.value)}</option>`;
  }
  $$payload.out += `<!--]--></select>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const sidebarUi = uiHelpers();
  let isOpen = false;
  const closeSidebar = sidebarUi.close;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const hasPath = (key) => activeUrl.includes(key);
  let pageStatus = hasPath("pages");
  let componentStatus = hasPath("components");
  let navClass = "w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4";
  let { children, data } = $$props;
  const analyticsId = data.ANALYTICS_ID_RUNES_LIB;
  let metaTags = store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags ? deepMerge(store_get($$store_subs ??= {}, "$page", page).data.layoutMetaTags, store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags) : data.layoutMetaTags;
  Runatics($$payload, { analyticsId });
  $$payload.out += `<!----> `;
  RunesMetaTags($$payload, spread_props([metaTags]));
  $$payload.out += `<!----> <header class="sticky top-0 z-50 mx-auto w-full flex-none border-b border-gray-200 bg-gray-50 lg:pl-4 dark:border-gray-600 dark:bg-gray-950">`;
  {
    let brand = function($$payload2) {
      $$payload2.out += `<button type="button" class="z-50 mr-4 mt-1 lg:hidden" aria-controls="sidebar"${attr("aria-expanded", isOpen)}><span class="sr-only">Toggle sidebar menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button> `;
      NavBrand($$payload2, {
        siteName: "Svelte 5 UI lib",
        spanClass: "text-xl sm:text-3xl",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" class="h-6 w-5 sm:h-10 sm:w-8" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="ml-auto flex items-center space-x-2 md:order-1">`;
      DynamicCodeBlockStyle($$payload2, { class: "mr-4 hidden sm:block" });
      $$payload2.out += `<!----> <a class="inline-block whitespace-normal rounded-lg p-1 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="https://github.com/shinokada/svelte-5-ui-lib">`;
      GitHub($$payload2, { class: "hidden sm:block" });
      $$payload2.out += `<!----></a> `;
      Darkmode($$payload2, { class: "hidden sm:block" });
      $$payload2.out += `<!----></div>`;
    };
    Navbar($$payload, {
      navClass,
      toggleNav,
      closeNav,
      navStatus,
      fluid: true,
      div2Class: "ml-auto w-full",
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          class: "md:space-x-6 lg:space-x-8",
          activeUrl,
          children: ($$payload3) => {
            NavLi($$payload3, {
              href: "/pages/coverage",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Coverage`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/pages/about",
              children: ($$payload4) => {
                $$payload4.out += `<!---->About`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              class: "sm:hidden",
              href: "https://github.com/shinokada/svelte-5-ui-lib",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Repo`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <div class="mt-4 flex justify-end space-x-4 sm:hidden">`;
        DynamicCodeBlockStyle($$payload2, {});
        $$payload2.out += `<!----> `;
        Darkmode($$payload2, { class: "sm:hidden" });
        $$payload2.out += `<!----></div>`;
      },
      $$slots: { brand: true, default: true }
    });
  }
  $$payload.out += `<!----></header> <div class="lg:flex" id="sidebar">`;
  Sidebar($$payload, {
    activeUrl,
    isSingle: true,
    isOpen,
    closeSidebar,
    breakpoint: "lg",
    activeClass: "flex items-center p-1 text-base font-normal text-white dark:hover:text-white hover:text-gray-900 bg-primary-700 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",
    nonActiveClass: "p-1 hover:bg-gray-200",
    divClass: "dark:bg-gray-900 bg-gray-50",
    class: "top-[62px] h-screen dark:bg-gray-900",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          SidebarDropdownWrapper($$payload3, {
            label: "GETTING STARTED",
            isOpen: pageStatus,
            svgClass: "me-4",
            btnClass: "p-1",
            children: ($$payload4) => {
              SidebarItem($$payload4, { label: "About", href: "/pages/about" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Coverage", href: "/pages/coverage" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          SidebarDropdownWrapper($$payload3, {
            label: "Components",
            isOpen: componentStatus,
            svgClass: "me-4",
            btnClass: "p-1",
            children: ($$payload4) => {
              SidebarItem($$payload4, {
                label: "Accordion",
                href: "/components/accordion"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Alert", href: "/components/alert" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Avatar", href: "/components/avatar" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Badge", href: "/components/badge" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Banner", href: "/components/banner" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Bottom navigation",
                href: "/components/bottom-navigation"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Breadcrumb",
                href: "/components/breadcrumb"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Button", href: "/components/button" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Button group",
                href: "/components/button-group"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Card", href: "/components/card" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Carousel",
                href: "/components/carousel"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Darkmode",
                href: "/components/darkmode"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Device mockup",
                href: "/components/device-mockup"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Drawer", href: "/components/drawer" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Dropdown",
                href: "/components/dropdown"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Footer", href: "/components/footer" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Gallery", href: "/components/gallery" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Indicators",
                href: "/components/indicators"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Kbd", href: "/components/kbd" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "List group",
                href: "/components/list-group"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Mega menu",
                href: "/components/mega-menu"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Modal", href: "/components/modal" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Navbar", href: "/components/navbar" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Pagination",
                href: "/components/pagination"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Popover", href: "/components/popover" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Progress",
                href: "/components/progress"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Rating", href: "/components/rating" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Sidebar", href: "/components/sidebar" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Skeleton",
                href: "/components/skeleton"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Speed dial",
                href: "/components/speed-dial"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Spinner", href: "/components/spinner" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Tab", href: "/components/tabs" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Table", href: "/components/table" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Timeline",
                href: "/components/timeline"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Toast", href: "/components/toast" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Tooltip", href: "/components/tooltip" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Video", href: "/components/video" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          SidebarDropdownWrapper($$payload3, {
            label: "Forms",
            isOpen: hasPath("forms"),
            svgClass: "me-4",
            btnClass: "p-1",
            children: ($$payload4) => {
              SidebarItem($$payload4, { label: "Checkbox", href: "/forms/checkbox" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "File input",
                href: "/forms/file-input"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Floating label",
                href: "/forms/floating-label"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Input field",
                href: "/forms/input-field"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Label", href: "/forms/label" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Radio", href: "/forms/radio" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Range", href: "/forms/range" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Search input",
                href: "/forms/search-input"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Select", href: "/forms/select" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Textarea", href: "/forms/textarea" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Toggle", href: "/forms/toggle" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          SidebarDropdownWrapper($$payload3, {
            label: "Typography",
            isOpen: hasPath("typography"),
            svgClass: "me-4",
            btnClass: "p-1",
            children: ($$payload4) => {
              SidebarItem($$payload4, {
                label: "Blockquote",
                href: "/typography/blockquote"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Heading/Mark",
                href: "/typography/heading"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "HR", href: "/typography/hr" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Image", href: "/typography/image" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Layout", href: "/typography/layout" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Link", href: "/typography/link" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "List", href: "/typography/list" });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, {
                label: "Paragraph",
                href: "/typography/paragraph"
              });
              $$payload4.out += `<!----> `;
              SidebarItem($$payload4, { label: "Span", href: "/typography/span" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          SidebarDropdownWrapper($$payload3, {
            label: "Plugins",
            svgClass: "me-4",
            btnClass: "p-1",
            children: ($$payload4) => {
              SidebarItem($$payload4, { label: "Chart", href: "/plugins/chart" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <main class="mx-auto min-w-0 max-w-7xl flex-auto px-8 pb-20 lg:static lg:max-h-full lg:overflow-visible lg:pl-72"><div id="mainContent">`;
  children($$payload);
  $$payload.out += `<!----></div></main></div> `;
  Footer_1($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
