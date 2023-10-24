import { SymbolKind } from "vscode-languageserver-types";
import { RuleKind } from "@nomicfoundation/slang/kinds";
import { Cursor } from "@nomicfoundation/slang/cursor";
import { slangToVSCodeRange } from "../../../parser/slangHelpers";
import { DefinitionVisitor } from "./DefinitionVisitor";

export class FallbackFunctionDefinition extends DefinitionVisitor {
  public ruleKind = RuleKind.FallbackFunctionDefinition;
  public symbolKind = SymbolKind.Function;

  protected getSymbolAttributes(cursor: Cursor) {
    return {
      name: "fallback",
      range: slangToVSCodeRange(this.document, cursor.textRange),
      selectionRange: slangToVSCodeRange(this.document, cursor.textRange),
      kind: this.symbolKind,
    };
  }
}
