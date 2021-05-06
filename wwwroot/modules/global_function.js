var urlWebApi = "https://ergast.com";

export function getWebApi(
  endPoint,
  params,
  nextSuccess,
  nextSuccessParams,
  nextError,
  nextComplete
) {
  const uri = urlWebApi + endPoint + ".json";
  $.ajax({
    url: uri,
    data: params,
    success: function (data) {
      nextSuccess(data, nextSuccessParams);
    },
    error: function (xhr, textStatus, textError) {
      if (nextError) {
        nextError(uri, xhr, textStatus, textError);
      } else {
        alert(
          `getSwWebApi: uri=${uri} status=${textStatus} error=${textError} responseText=${xhr.responseText}`
        );
      }
    },
    complete: function () {
      if (nextComplete) {
        nextComplete();
      }
    },
  });
}

export function putWebApi(
  endPoint,
  params,
  nextSuccess,
  nextSuccessParams,
  nextError,
  nextComplete
) {
  const uri = urlWebApi + endPoint + ".json";
  $.ajax({
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    url: uri,
    data: JSON.stringify(params),
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", token);
    },
    success: function (data) {
      nextSuccess(data, nextSuccessParams);
    },
    error: function (xhr, textStatus, textError) {
      if (nextError) {
        nextError(uri, xhr, textStatus, textError);
      } else {
        alert(
          `putWebApi: uri=${uri} status=${textStatus} error=${textError} responseText=${xhr.responseText}`
        );
      }
    },
    complete: function () {
      if (nextComplete) {
        nextComplete();
      }
    },
  });
}

export function deleteWebApi(
  endPoint,
  params,
  nextSuccess,
  nextSuccessParams,
  nextError,
  nextComplete
) {
  const uri = urlWebApi + endPoint + ".json";
  $.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    url: uri,
    data: JSON.stringify(params),
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", token);
    },
    success: function (data) {
      nextSuccess(data, nextSuccessParams);
    },
    error: function (xhr, textStatus, textError) {
      if (nextError) {
        nextError(uri, xhr, textStatus, textError);
      } else {
        alert(
          `deleteWebApi: uri=${uri} status=${textStatus} error=${textError} responseText=${xhr.responseText}`
        );
      }
    },
    complete: function () {
      if (nextComplete) {
        nextComplete();
      }
    },
  });
}

export function postWebApi(
  endPoint,
  params,
  nextSuccess,
  nextSuccessParams,
  nextError,
  nextComplete
) {
  const uri = urlWebApi + endPoint + ".json";
  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    url: uri,
    data: JSON.stringify(params),
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", token);
    },
    success: function (data) {
      nextSuccess(data, nextSuccessParams);
    },
    error: function (xhr, textStatus, textError) {
      if (nextError) {
        nextError(uri, xhr, textStatus, textError);
      } else {
        alert(
          `postWebApi: uri=${uri} status=${textStatus} error=${textError} responseText=${xhr.responseText}`
        );
      }
    },
    complete: function () {
      if (nextComplete) {
        nextComplete();
      }
    },
  });
}
