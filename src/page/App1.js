import { useState } from 'react';
import './App1.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App1() {
    const [movieContent, setMovieContent] = useState({
        title: '',
        contents: ''
    })

    const [viewContent, setViewContent] = useState([]);
    const getValue = e => {
        const { name, value } = e.target;
        setMovieContent({
          ...movieContent,
          [name]: value
        })
        console.log(movieContent);
      };
    return (
      <div className="App">
        <h1>게시글 목록</h1>
        <div className='movie-container'>
            {viewContent.map(element =>
          <div>
              <h2>{element.title}</h2>
            <div>
                {element.content}
          </div>
        </div>
        )}
        </div>
        <div className='form-wrapper'>
        <h1>게시글 작성</h1>
        <input className="title-input"
                type='text'
                placeholder='제목'
                onChange={getValue}
                name='title'
            />
          <CKEditor
            editor={ClassicEditor}
            data="<p></p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setMovieContent({
                  ...movieContent,
                  content: data
                })
                console.log(movieContent);
              }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </div>
        <button className="submit-button"
        onClick={() => {
            setViewContent(viewContent.concat({...movieContent}));
        }}>입력</button>
      </div>
    );
  }
  
  export default App1;