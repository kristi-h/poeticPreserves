import React from 'react'
import '../App.css'

export default function AddEntry({clickSubmit, onChangeHandler, poem, formInput }){
    return(
        <div>
            <form className="form-elements" onSubmit={clickSubmit}>
                <label>Title:
                    <input 
                    type="text" 
                    name="title"
                    value={formInput.title}
                    onChange={onChangeHandler}
                    placeholder='And Still I Rise'
                    required
                    />
                </label>
                <pre>
                    <label>Author:
                        <input 
                        type="text" 
                        placeholder='Maya Angelou'
                        name="author"
                        value={formInput.author}
                        onChange={onChangeHandler}
                        required
                        />
                    </label>
                </pre>
                <pre>
                <label>Entry:
                    <textarea
                    name="entry"
                    minLength={10}
                    // defaultValue=
                    //     "Just like moons and like suns,
                    //     With the certainty of tides,
                    //     Just like hopes springing high,
                    //     Still I'll rise."
                    rows={4}
                    cols={40}
                    value={formInput.entry}
                    onChange={onChangeHandler}
                    />
                </label>
                </pre>
                <pre>
                <label>Genre:
                    <select name="genre" required>
                        <option value="pastoral">Pastoral</option>
                        <option value="satirical">Satirical</option>
                        <option value="lyrical">Lyrical</option>
                        <option value="prose">Prose</option>
                        <option value="narrative">Narrative</option>
                    </select>
                </label>
                </pre>
                <pre>
                <label>Language:
                    <select name="language" required>
                        <option value="english">English</option>
                        <option value="korean">Korean</option>
                        <option value="chinese">Chinese</option>
                        <option value="spanish">Spanish</option>    
                    </select>
                    {/* <button>Add new language</button> */}
                </label>
                </pre>
                <pre>
                <label>Keywords:
                    <select name="keyword" required>
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
                <input type="submit" />
                </pre>
            </form>
        </div>
    )
}