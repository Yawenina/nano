// @flow
import { jsxDom } from 'zoid/src/lib/dom';

export function Button(): HTMLElement {
  return (
    <div className="myButton__container">
      <style>
        {
          `
            .myButton__button {
                font-size: 14px;
                width: 200px;
                height: 48px;
                line-height: 48px;
                border-radius: 160px;
                text-align: center;
                color: #fff;
                border: 1px solid #1890ff;
                background: #1890ff;
                outline: none;
                cursor: pointer;
                transition: color .15s ease-in-out,
                            background-color .15s ease-in-out,
                            border-color .15s ease-in-out,
                            box-shadow .15s ease-in-out;
              }
              .myButton__button:hover {
                background-color: #40a9ff;
                border-color: #40a9ff;
              }
          `
        }
      </style>
      <div class="myButton__button">Pay With Nano</div>
    </div>
  )
}