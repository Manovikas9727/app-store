// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const tabBtnClass = isActive ? 'tab-btn active' : 'tab-btn'

  return (
    <li className="tab-item">
      <button type="button" className={tabBtnClass} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
