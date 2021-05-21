type RequestInput = {
  url: string;
  method: Method;
  params?: any;
  data?: any;
};

type ApiResponse<T> = {
  loading?: boolean;
  error?: string;
  result?: T;
};

type Domain = {
  domain: "string";
  create_date: "string";
  update_date: "string";
  country: "string";
  isDead: "string";
  A: ["string"] | undefined;
  NS: ["string"] | undefined;
  CNAME: ["string"] | undefined;
  MX:
    | [
        {
          exchange: "string";
          priority: 0;
        }
      ]
    | undefined;
  TXT: ["string"] | undefined;
};
