function createSQLComponent(type) {
  type = type.toLowerCase();
  return (props, children) => {
    switch (type) {
      case "select":
        return `SELECT * FROM ${props.from} ${children.join(" ")}`;
      case "where":
        return `WHERE ${children.join(" ")}`;
      case "column":
        return `${props.name} ${children.join("")}`;
      case "in":
        return `IN ${children.join("")}`;
      case "not":
      case "and":
        return `${type} ${children.join("")}`;
      case "eq":
        return `= ${children.join("")}`;
      case "parenthesis":
        return `( ${children.join(", ")} )`;
      case "raw":
        return `${children.join("")}`;
      default:
        return type + " " + children.join(" ");
    }
  };
}

export function sqlx(componentType, props, ...children) {
  const component = createSQLComponent(componentType);
  const processedChildren = children.map((child) =>
    typeof child === "function" ? child() : child
  );
  return component(props, processedChildren);
}

if (typeof sqlx !== "undefined" && typeof window !== "undefined")
  window.sqlx = sqlx;
