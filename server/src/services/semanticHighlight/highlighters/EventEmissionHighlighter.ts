import { SemanticTokenTypes } from "vscode-languageserver-protocol";
import { NodeType } from "@nomicfoundation/slang/cst";
import { RuleKind, TokenKind } from "@nomicfoundation/slang/kinds";
import { Cursor } from "@nomicfoundation/slang/cursor";
import { HighlightVisitor } from "../HighlightVisitor";

// Highlights event emissions
export class EventEmissionHighlighter extends HighlightVisitor {
  public enter(cursor: Cursor): void {
    const node = cursor.node;
    const ancestors = cursor.pathRuleNodes;
    if (
      node.type === NodeType.Token &&
      node.kind === TokenKind.Identifier &&
      ancestors[ancestors.length - 2]?.kind === RuleKind.EmitStatement
    ) {
      this.tokenBuilder.addToken(cursor, SemanticTokenTypes.type);
    }
  }
}
