import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import ListItem from './ListItem';
import { sortTodo } from '../redux/actions';

const FilteredList = ({ items }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    dispatch(sortTodo(items, result.source.index, result.destination.index));
  };

  function getStyle(style, snapshot) {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    const { moveTo, curve, duration } = snapshot.dropAnimation;
    // move to the right spot
    const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;
    // add a bit of turn for fun
    const rotate = 'rotate(0.5turn)';

    // patching the existing style
    return {
      ...style,
      // slowing down the drop because we can
      transition: `all 500ms`,
    };
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, idx) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={idx}
              >
                {(provided, snapshot) => (
                  <li
                    className="border-b py-4 relative list-item bg-white dark:bg-desaturatedDarkBlue dark:border-veryDarkGrayishBlue2"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getStyle(provided.draggableProps.style, snapshot)}
                  >
                    <ListItem item={item} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default FilteredList;
