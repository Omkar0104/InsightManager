// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kewrqcclquwyfhqjokqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtld3JxY2NscXV3eWZocWpva3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3ODUwNjUsImV4cCI6MjAwODM2MTA2NX0.LgZK6VYylq5_yjavS7K0lg6IxfA3UkL2qpv9DieIeeU";
const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(supabase.supabaseUrl);
export default supabase;
