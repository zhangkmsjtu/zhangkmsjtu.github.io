/*! For license information please see extension.node.js.LICENSE.txt */
                            try:
                                del _VSCODE_getVariable
                            except:
                                pass
                            `;let Rc=Cc=class{constructor(e,t){this.fs=e,this.context=t}async generateCodeToGetVariableInfo(e){const t=await this.getContentsOfScript(),n=e.isDebugging?"True":"False",r=`${xc}("info", ${n}, ${e.variableName})`;return e.isDebugging?{initializeCode:t,code:r,cleanupCode:Pc}:{code:`${t}\n\n${r}\n\n${Pc}`}}async generateCodeToGetVariableProperties(e){const t=await this.getContentsOfScript(),n=e.isDebugging?"True":"False",r=`${xc}("properties", ${n}, ${e.variableName}, ${e.stringifiedAttributeNameList})`;return e.isDebugging?{initializeCode:t,code:r,cleanupCode:Pc}:{code:`${t}\n\n${r}\n\n${Pc}`}}async generateCodeToGetVariableTypes(e){const t=`${await this.getContentsOfScript()}\n\n_VSCODE_rwho_ls = %who_ls\n`,n=e.isDebugging?"True":"False",r=Ec()`
        try:
            del _VSCODE_rwho_ls
        except:
            pass
        `,i=`${xc}("types", ${n}, _VSCODE_rwho_ls)`;return e.isDebugging?{initializeCode:t,code:i,cleanupCode:`${Pc}\n${r}`}:{code:`${t}${i}\n\n${Pc}\n${r}`}}async getContentsOfScript(){if(Cc.contentsOfScript)return Cc.contentsOfScript;const e=Fn(this.context.extensionUri,"pythonFiles","vscode_datascience_helpers","getVariableInfo","vscodeGetVariableInfo.py"),t=await this.fs.readFile(e);return Cc.contentsOfScript=t,t}};Rc=Cc=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}([(0,Lt.b2)(),Dc(0,(0,Lt.f3)(es)),Dc(1,(0,Lt.f3)(Zt))],Rc);var Tc,Ic=function(e,t){return function(n,r){t(n,r,e)}};const Oc="_VSCODE_getDataFrame",Nc=Ec()`
                            try:
                                del _VSCODE_getDataFrame
                            except:
                                pass
//# sourceMappingURL=extension.node.js.map