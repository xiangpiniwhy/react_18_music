import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTopBanner } from '@/views/discover/c_cpns_recommend/request'

export const fetchRecommendAction = createAsyncThunk(
  'fetchdata,',
  (payload, { dispatch }) => {
    // 顶部的轮播图
    getTopBanner().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
  }
)

interface IRecommend {
  banners?: any[]
}

const initialState: IRecommend = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<string[]>) {
      state.banners = payload
    }
  }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
