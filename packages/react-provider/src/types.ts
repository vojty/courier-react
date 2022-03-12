import { Transport } from "./transports";
import { Interceptor } from "./transports/types";
import { ErrorEvent } from "reconnecting-websocket";

export type ErrorEventHandler = (event: ErrorEvent) => void;

export type WSOptions = {
  url?: string;
  onError?: ErrorEventHandler;
  connectionTimeout?: number;
};
export interface Brand {
  inapp?: {
    disableCourierFooter?: boolean;
    borderRadius?: string;
    disableMessageIcon?: boolean;
    placement?: "top" | "bottom" | "left" | "right";
    emptyState?: {
      textColor?: string;
      text?: string;
    };
    widgetBackground?: {
      topColor?: string;
      bottomColor?: string;
    };
    icons?: {
      bell?: string;
      message?: string;
    };
    toast?: {
      borderRadius?: string;
      timerAutoClose?: number;
    };
  };
  colors?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
}

export interface ICourierProviderProps {
  apiUrl?: string;
  brand?: Brand;
  brandId?: string;
  clientKey: string;
  middleware?: any;
  onMessage?: Interceptor;
  transport?: Transport;
  userId?: string;
  userSignature?: string;
  wsOptions?: WSOptions;
}
export interface ICourierContext extends ICourierProviderProps {
  dispatch?: (action: { type: string; payload: any }) => void;
  graphQLClient?: any;
}
