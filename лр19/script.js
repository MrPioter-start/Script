function parseJSON(jsonString) {
  let index = 0;

  function parseValue() {
    skipWhitespace();
    const char = jsonString[index];
    if (char === "{") {
      return parseObject();
    } else if (char === "[") {
      return parseArray();
    } else if (char === '"') {
      return parseString();
    } else if (char === "t" || char === "f") {
      return parseBoolean();
    } else if (char === "n") {
      return parseNull();
    } else if (char === "-" || (char >= "0" && char <= "9")) {
      return parseNumber();
    } else {
      throw new SyntaxError(
        `Unexpected token ${char} in JSON at position ${index}`
      );
    }
  }

  function parseObject() {
    const obj = {};
    index++;
    skipWhitespace();
    while (jsonString[index] !== "}") {
      const key = parseString();
      skipWhitespace();
      if (jsonString[index] !== ":") {
        throw new SyntaxError(
          `Expected ':' after key in object at position ${index}`
        );
      }
      index++;
      const value = parseValue();
      obj[key] = value;
      skipWhitespace();
      if (jsonString[index] === ",") {
        index++;
        skipWhitespace();
      }
    }
    index++;
    return obj;
  }

  function parseArray() {
    const arr = [];
    index++;
    skipWhitespace();
    while (jsonString[index] !== "]") {
      const value = parseValue();
      arr.push(value);
      skipWhitespace();
      if (jsonString[index] === ",") {
        index++;
        skipWhitespace();
      }
    }
    index++;
    return arr;
  }

  function parseString() {
    index++;
    let result = "";
    while (jsonString[index] !== '"') {
      if (jsonString[index] === "\\") {
        index++;
        const escapeChar = jsonString[index];
        if (escapeChar === "n") {
          result += "\n";
        } else if (escapeChar === "t") {
          result += "\t";
        } else if (escapeChar === "r") {
          result += "\r";
        } else if (escapeChar === "b") {
          result += "\b";
        } else if (escapeChar === "f") {
          result += "\f";
        } else {
          result += escapeChar;
        }
      } else {
        result += jsonString[index];
      }
      index++;
    }
    index++;
    return result;
  }

  function parseNumber() {
    let start = index;
    while (
      jsonString[index] === "-" ||
      jsonString[index] === "+" ||
      (jsonString[index] >= "0" && jsonString[index] <= "9") ||
      jsonString[index] === "." ||
      jsonString[index] === "e" ||
      jsonString[index] === "E"
    ) {
      index++;
    }
    const numStr = jsonString.slice(start, index);
    return parseFloat(numStr);
  }

  function parseBoolean() {
    if (jsonString.slice(index, index + 4) === "true") {
      index += 4;
      return true;
    } else if (jsonString.slice(index, index + 5) === "false") {
      index += 5;
      return false;
    } else {
      throw new SyntaxError(`Unexpected token in JSON at position ${index}`);
    }
  }

  function parseNull() {
    if (jsonString.slice(index, index + 4) === "null") {
      index += 4;
      return null;
    } else {
      throw new SyntaxError(`Unexpected token in JSON at position ${index}`);
    }
  }

  function skipWhitespace() {
    while (
      jsonString[index] === " " ||
      jsonString[index] === "\t" ||
      jsonString[index] === "\n" ||
      jsonString[index] === "\r"
    ) {
      index++;
    }
  }

  return parseValue();
}

const jsonString =
  '{"name": "John", "age": 30, "isStudent": false, "scores": [95, 82, 88], "address": {"city": "New York", "zip": "1000\n1",}}';
const parsedObject = parseJSON(jsonString);
console.log(parsedObject);

function stringifyJSON(obj) {
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  }
  if (typeof obj === "string") {
    return `"${escapeString(obj)}"`;
  }
  if (Array.isArray(obj)) {
    const elements = obj.map((element) => stringifyJSON(element));
    return `[${elements.join(",")}]`;
  }
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    const keyValuePairs = keys.map((key) => {
      return `"${escapeString(key)}":${stringifyJSON(obj[key])}`;
    });
    return `{${keyValuePairs.join(",")}}`;
  }
  throw new Error(`Unsupported type: ${typeof obj}`);
}

function escapeString(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/[\b]/g, "\\b")
    .replace(/[\f]/g, "\\f")
    .replace(/[\n]/g, "\\n")
    .replace(/[\r]/g, "\\r")
    .replace(/[\t]/g, "\\t");
}

const obj = {
  name: "John",
  age: 30,
  isStudent: false,
  scores: [95, 82, 88],
  address: {
    city: "New York",
    zip: "1000\n1",
  },
};

const jsonString2 = stringifyJSON(obj);
console.log(jsonString2);
