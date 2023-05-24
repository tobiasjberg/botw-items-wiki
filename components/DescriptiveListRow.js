import { titleCase, titleSpacing } from '../utils/utils'

const DescriptiveListRow = ({ label, value }) => {
  if (label === 'id' || label === 'image' || label === 'name' || label === 'description' || value === null || value === '') {
    return ''
  } else if (Array.isArray(value)) {
    return (
      <div className="dlRow">
        <dt>{titleSpacing(titleCase(label))}</dt>
        <dd>
          <ul className="noBulletList">
            {value.map((li, index) => (
              <li key={index}>{titleCase(li)}</li>
            ))}
          </ul>
        </dd>
      </div>
    )
  } else {
    return (
      <div className="dlRow">
        <dt>{titleSpacing(titleCase(label))}</dt>
        <dd>{typeof value === "string" ? titleSpacing(titleCase(value)) : value}</dd>
      </div>
    )
  }
};

export default DescriptiveListRow