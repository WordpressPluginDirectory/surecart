import{newSpecPage}from"@stencil/core/testing";import{ScOrderConfirmationLineItems}from"../sc-order-confirmation-line-items";describe("sc-order-confirmation-line-items",(()=>{it("renders",(async()=>{const e=await newSpecPage({components:[ScOrderConfirmationLineItems],html:"<sc-order-confirmation-line-items></sc-order-confirmation-line-items>"});expect(e.root).toMatchSnapshot()}))}));