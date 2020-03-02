import React, {useState, Fragment} from 'react'

const BasicForm = () => {
    const [formData, setFormData] = useState({
        seoRegionId: '',
        url: '',

    });

    const onChangeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData)
    }

    return(
        <Fragment>
            <form>
                <label htmlFor="seoregionid">Seo Region ID: </label>
                <input type="text" name="seoRegionId" value={formData.seoRegionId} onChange={onChangeHandler}/>
                <br />

                <label htmlFor="url">Url: </label>
                <input type="text" name="url" value={formData.url} onChange={onChangeHandler}/>
                <br />

                {/*<label htmlFor="type">Type: </label>*/}
                {/*<input type="text" name="type" value={formData.type} onChange={onChangeHandler}/>*/}
                {/*<br />*/}

                {/*<label htmlFor="cityName">City name: </label>*/}
                {/*<input type="text" name="cityName" value={formData.cityName} onChange={onChangeHandler}/>*/}
                {/*<br />*/}

                {/*<label htmlFor="desc">Description: </label>*/}
                {/*<input type="textarea" name="desc" value={formData.desc} onChange={onChangeHandler}/>*/}
                {/*<br />*/}

                {/*<label htmlFor="domains">Domains: </label>*/}
                {/*<input type="text" name="domains" value={formData.domains} onChange={onChangeHandler}/>*/}
                {/*<br />*/}

                {/*<label htmlFor="template">Template: </label>*/}
                {/*<input type="text" name="template" value={formData.template} onChange={onChangeHandler}/>*/}
                {/*<br />*/}
            </form>
        </Fragment>
    )
}

export default BasicForm