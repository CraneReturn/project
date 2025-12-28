import { type FC } from 'react'
import { type ReactNodeProps } from '@logicflow/react-node-registry'
import '../../assets/css/flowWork.css'
const UserTaskNode: FC<ReactNodeProps> = ({ node }) => {
  const data = node.getData()
  const properties = data.properties || {}

  const {
    name = '用户任务',
    isClicked = false,
    width = 120,
    height = 60,
  } = properties

  const borderColor = isClicked
    ? 'border-red-500'
    : 'border-blue-500'

  const textColor = isClicked
    ? 'text-red-500'
    : 'text-blue-500'

  return (
    <div
      className={`
        relative bg-white rounded-md border-2
        ${borderColor}
        flex items-center gap-2 px-3
        select-none
      `}
      style={{
        width,
        height,
      }}
    >
      {/* 👤 用户图标 */}
      <svg
        className="w-5 h-5"
        viewBox="0 0 1274 1024"
        fill="currentColor"
      >
        <path d="M690.366075 350.568358c0-98.876614-79.937349-179.048571-178.558027-179.048571..." />
        <path d="M512.31992 1.535616c-282.766642 0-512.021328..." />
      </svg>

      {/* 文本 */}
      <span className={`text-sm ${textColor}`}>
        {name}
      </span>
    </div>
  )
}

export default UserTaskNode
