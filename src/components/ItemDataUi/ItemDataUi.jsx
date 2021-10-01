export default function ItemDataUi({item,handleDoubleClickEdit,line}){
    return(
        <div
          onDoubleClick={() => {
            handleDoubleClickEdit(item.id);
          }}
          className={line+" w-full text-grey-darkest pl-2"}
        >
          {item.text}
          <div className="text-xs">
            {item.date}
          </div>
        </div>
    )
}