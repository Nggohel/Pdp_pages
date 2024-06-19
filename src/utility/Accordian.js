import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "../style/styles.module.css";
import Arrow from "../Images/Arrow.svg";
import productIcon from "../Images/productIcon.svg";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {header}
          <img
            src={Arrow}
            alt="Chevron Down"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function Accordian() {
  return (
    <div>
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS  initialEntered*/}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem
            header={
              <div>
                <h3 className={styles.productInfoTitle}>Product details</h3>
                <div className={styles.productInfoSubtitle}>
                  Care instructions, Pack contains
                </div>
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem
            header={
              <div>
                <h3 className={styles.productInfoTitle}>Know your product</h3>
                <div className={styles.productInfoSubtitle}>Description</div>
              </div>
            }
          >
            Mauve floral printed rayon front slit kurta with shirt collar,
            buttons on yoke and printed pant which has full elasticated
            waistband. Pair it with beautiful accessories like jhumkas, kadas
            and jutties to enhance the look. Products Length - 46" Inch, Pant
            Length - 38" Inch.
          </AccordionItem>

          <AccordionItem
            header={
              <div>
                <h3 className={styles.productInfoTitle}>Vendor details</h3>
                <div className={styles.productInfoSubtitle}>
                  Country of origin, Manufacturer details
                </div>
              </div>
            }
          >
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>

          <AccordionItem
            header={
              <div>
                <h3 className={styles.productInfoTitle}>
                  Return and exchange policy
                </h3>
              </div>
            }
          >
            This product is eligible for returns and size replacements. Please
            initiate returns/replacements from the 'My Orders' section in the
            App within 7 days of delivery. Please ensure the product is in its
            original condition with all tags attached.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
