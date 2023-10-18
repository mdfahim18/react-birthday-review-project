import { peopleType } from './types';

type peopeleProps = {
  people: peopleType[];
  hanldeRemove: Function;
};

const List = (props: peopeleProps) => {
  return (
    <>
      {props.people.map((person: any) => {
        const { id, name, age, image } = person;

        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
              <button
                className='remove-btn'
                onClick={() => props.hanldeRemove(id)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
