import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "../actions/types";
import streamsApi from "../apis/streams";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streamsApi.postStreamAsync(formValues);

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streamsApi.getStreamsAsync();

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streamsApi.getStreamByIdAsync(id);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streamsApi.editStreamAsync(id, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await streamsApi.deleteStreamAsync(id);

  dispatch({
    type: DELETE_STREAM,
    payload: response.data,
  });
};
