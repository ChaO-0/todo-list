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
                    className="border-b-2 py-4 relative list-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
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
