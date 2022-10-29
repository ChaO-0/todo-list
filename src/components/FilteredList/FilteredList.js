import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import { sortTodo } from '../../redux/actions';

const FilteredList = ({ items }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    dispatch(sortTodo(items, result.source.index, result.destination.index));
  };

  const droppableList = (provided) => (
    <div {...provided.droppableProps} ref={provided.innerRef}>
      {items.map((item, idx) => (
        <Draggable key={item.id} draggableId={item.id.toString()} index={idx}>
          {(provided) => (
            <div className="border-b">
              <li
                className="rounded py-4 relative list-item bg-white dark:bg-desaturatedDarkBlue dark:border-veryDarkGrayishBlue2"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <ListItem item={item} />
              </li>
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">{droppableList}</Droppable>
    </DragDropContext>
  );
};

export default FilteredList;
