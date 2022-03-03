'use strict'

const dashify = require('dashify')

module.exports = ({ componentName }) => {
  return `import * as React from "react";
import { ${componentName} as Ant${componentName}, ${componentName}Props as Ant${componentName}Props } from "antd";

import 'antd/lib/${dashify(componentName)}/style/index.css'
import "./style.css"

export type ${componentName}Props = Ant${componentName}Props;

const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return <Ant${componentName} {...props} />;
};

${componentName}.defaultProps = {};

export default ${componentName};
`
}
