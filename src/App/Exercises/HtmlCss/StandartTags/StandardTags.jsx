import "./styles.css";
export const StandardTags = () => {
  return (
    <>
      <div class="original-tags">
        <div className="title">
          <h1>Tytuł</h1>
        </div>
        <span>
          <small>05.2023</small>
        </span>
        <div className="good">
          <h3>
            H<sub>2</sub>O is good for you
          </h3>
        </div>
        <div className="paraone">
          <p>
            Staying <b>hydrated</b> is one of the best things you can do for
            your overall health. Staying <b>hydrated</b> can help support
            physical performance, prevent headaches and constipation, and more.
          </p>
        </div>
        <div className="good">
          <h3>
            25<sup>th</sup> birthday
          </h3>
        </div>
        <div className="paraone">
          <p>
            Make the next birthday you celebrate a special one with a
            hand-picked happy birthday <q>quote</q> or wish that will surely
            make that special someone’s day a great day. Whether you’re
            celebrating your birthday or someone else’s, you can rely on our
            list of <i>happy birthday</i> <q>quotes</q> to help put a smile on
            someone’s face. From inspirational to funny to cute sayings, browse
            our list of
            <q>quotes</q> to find one that resonates with you.{" "}
            <del>Nothing</del> can stop you!
          </p>
        </div>
        <div className="good">
          <h3>
            Why not to use <ins>lists</ins> ?
          </h3>
        </div>
        <div className="paraone">
          <p>
            <div className="lot">
              <h5>
                A lot of things to do <i>#todo</i>
              </h5>
            </div>
            <div className="list">
              <ul>
                <div className="points">
                  {" "}
                  <li>Todo 1</li>
                  <li>Todo 2</li>
                  <li>Todo 3</li>
                </div>
              </ul>
            </div>
          </p>
        </div>
      </div>

      <hr />

      <div class="faked-tags">
        <h1>Tytuł</h1>
        <small>05.2023</small>
        <h3>
          H<sub>2</sub>O is good for you
        </h3>
        <p>
          Staying <b>hydrated</b> is one of the best things you can do for your
          overall health. Staying <b>hydrated</b> can help support physical
          performance, prevent headaches and constipation, and more.
        </p>
        <h3>
          25<sup>th</sup> birthday
        </h3>
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someone’s day a great day. Whether you’re celebrating your birthday or
          someone else’s, you can rely on our list of <i>happy birthday</i>{" "}
          <q>quotes</q> to help put a smile on someone’s face. From
          inspirational to funny to cute sayings, browse our list of
          <q>quotes</q> to find one that resonates with you. <del>Nothing</del>{" "}
          can stop you!
        </p>
        <h3>
          Why not to use <ins>lists</ins> ?
        </h3>
        <p>
          <h5>
            A lot of things to do <i>#todo</i>
          </h5>
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
        </p>
      </div>
    </>
  );
};
