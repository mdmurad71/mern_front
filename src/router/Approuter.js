import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import Add from '../component/Add'
import Update from '../component/Update'
import View from '../component/View'

export default function Approuter() {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<View />} />
                <Route path='/add' element={<Add />} />
                <Route path='/update' element={<Update />} />
            </Routes>
        </Fragment>
    )
}
