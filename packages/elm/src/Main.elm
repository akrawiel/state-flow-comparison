module Main exposing (main)

import Browser
import Html exposing (Html, button, div, form, input, small, text)
import Html.Attributes exposing (class, id, placeholder, type_, value)
import Html.Events exposing (onClick, onInput, onSubmit)
import Html.Keyed as Keyed
import Html.Lazy exposing (lazy)
import Platform exposing (Program)
import Random
import Uuid exposing (Uuid, toString, uuidGenerator)


type alias Todo =
    { id : String
    , text : String
    }


type alias Model =
    { todos : List Todo
    , text : String
    }


type Msg
    = AddTodo
    | ChangeText String
    | RemoveTodo String
    | IdGenerated Uuid


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


init : () -> ( Model, Cmd Msg )
init _ =
    ( { todos = []
      , text = ""
      }
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeText text ->
            ( { model | text = text }, Cmd.none )

        AddTodo ->
            ( model, Random.generate IdGenerated uuidGenerator )

        IdGenerated id ->
            ( { model | todos = List.append model.todos [ { id = toString id, text = model.text } ], text = "" }, Cmd.none )

        RemoveTodo todoId ->
            ( { model | todos = List.filter (\{ id } -> id /= todoId) model.todos }, Cmd.none )


viewTodo : Todo -> Html Msg
viewTodo todo =
    div [ class "todo" ]
        [ div [ class "todo-description" ]
            [ div [] [ text todo.text ]
            , small [] [ text todo.id ]
            ]
        , button [ class "todo-remove", onClick (RemoveTodo todo.id) ] [ text "×" ]
        ]


viewKeyedTodo : Todo -> ( String, Html Msg )
viewKeyedTodo todo =
    ( todo.id, lazy viewTodo todo )


viewTodos : List Todo -> Html Msg
viewTodos todos =
    Keyed.node "div" [] (List.map viewKeyedTodo todos)


view : Model -> Html Msg
view model =
    div [ id "app" ]
        [ div [ class "todo-container" ]
            [ form [ class "todo-form", onSubmit AddTodo ]
                [ input
                    [ type_ "text"
                    , value model.text
                    , placeholder "Add a new task"
                    , onInput
                        ChangeText
                    ]
                    []
                , button [ type_ "submit" ] [ text "OK" ]
                ]
            , viewTodos model.todos
            ]
        ]
