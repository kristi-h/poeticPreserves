import React from 'react'
import '../App.css'
import '../index.css'
import { addPoem } from '../library/firebase'


export default function AddEntry(){

    const onChangeHandler = (e) => {
        setPoem({
            ...poem,
            [e.target.name]: e.target.value 
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPoem(poem)
            //clear the form
            e.target.reset() 
          } catch(e) {
            console.log(e)
          }
      } 

    return(
        <div className='entry-container'>
            <form className="form-elements" onSubmit={handleSubmit}>
                <label>Title
                    <input 
                    type="text" 
                    name="title"
                    className='input-box'
                    value={poem.title}
                    onChange={onChangeHandler}
                    placeholder='And Still I Rise'
                    required
                    />
                </label>
                <pre>
                    <label>Author
                        <input 
                        type="text" 
                        placeholder='Maya Angelou'
                        name="author"
                        className='input-box'
                        value={poem.author}
                        onChange={onChangeHandler}
                        required
                        />
                    </label>
                </pre>
                <pre>
                <label>Entry
                    <textarea
                    name="entry"
                    className='input-box'
                    minLength={10}
                    rows={4}
                    cols={40}
                    value={poem.entry}
                    onChange={onChangeHandler}
                    />
                </label>
                </pre>
                <pre>
                <label>Genre
                    <select name="genre" className='input-box' value={poem.genre} onChange={onChangeHandler} required>
                        <option value="pastoral">Pastoral</option>
                        <option value="satirical">Satirical</option>
                        <option value="lyrical">Lyrical</option>
                        <option value="prose">Prose</option>
                        <option value="narrative">Narrative</option>
                    </select>
                </label>
                </pre>
                <pre>
                <label>Language
                    <select name="language" className='input-box' value={poem.language} onChange={onChangeHandler} required>
                        <option value="english">English</option>
                        <option value="korean">Korean</option>
                        <option value="chinese">Chinese</option>
                        <option value="spanish">Spanish</option>    
                    </select>
                    {/* <button>Add new language</button> */}
                </label>
                </pre>
                <pre>
                <label>Keywords
                    <select name="keyword" className='input-box' value={poem.keyword} onChange={onChangeHandler} required>
                        <option value="nature">Nature</option>
                        <option value="uplifting">Uplifting</option>
                        <option value="empowering">Empowering</option>
                        <option value="melancholy">Melancholy</option>    
                        <option value="grief">Grief</option>  
                    </select>
                    {/* <button>Add new keyword</button> */}
                </label>
                </pre>
                <pre>
                <input className={'input-button'} type="submit" />
                </pre>
            </form>
        </div>
    )
}