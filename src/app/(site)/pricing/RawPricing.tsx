import React from "react";

export default function RawPricing() {
  const plans = [
    {
      name: "Talent Only",
      desc: "Agents to help you grow from here to where you want to go next.",
      teamSize: "2+",
      agents: "Dedicated",
      teamLeader: "Shared",
      operationsManager: "Shared",
      onboardingManager: "Shared",
      csm: "Shared",
      hrPeoplePartner: "Shared",
      continuousImprovement: "Add-on",
      ldOfficer: "Add-on",
      wfm: "Add-on",
      qualityAssurance: "Add-on",
      buffer: "Add-on",
      pexFreeProject: "Not included",
      billingModel: "Subscription-based monthly billing",
    },
    {
      name: "Talent & Primary Support",
      desc: "A team of agents with the primary support team included to be self-supported, lightening your load.",
      teamSize: "5+",
      agents: "Dedicated",
      teamLeader: "Shared / Dedicated (Option to buy-up)",
      operationsManager: "Shared",
      onboardingManager: "Shared",
      csm: "Shared",
      hrPeoplePartner: "Shared",
      continuousImprovement: "Add-on",
      ldOfficer: "Shared / Dedicated (Option to buy-up)",
      wfm: "Add-on",
      qualityAssurance: "Shared / Dedicated (Option to buy-up)",
      buffer: "Add-on",
      pexFreeProject: "Included",
      billingModel: "Subscription-based or per hour",
    },
    {
      name: "Talent & Full Support",
      desc: "A turn-key CX program where we execute your vision and partner to accelerate your CX dreams.",
      teamSize: "25+",
      agents: "Dedicated",
      teamLeader: "Dedicated",
      operationsManager: "Shared / Dedicated",
      onboardingManager: "Shared",
      csm: "Shared / Dedicated",
      hrPeoplePartner: "Shared / Dedicated",
      continuousImprovement: "Shared / Dedicated",
      ldOfficer: "Shared / Dedicated",
      wfm: "Shared / Dedicated",
      qualityAssurance: "Shared / Dedicated",
      buffer: "Dedicated",
      pexFreeProject: "Included",
      billingModel: "Per hour or per transaction-based billing",
    },
  ];

  return (
    <section className="relative py-14">
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="max-w-screen-xl mx-auto text-gray-400 md:px-8">
        <div className="relative max-w-xl space-y-3 px-4 md:px-0">
          <h3 className="text-purple-600 font-semibold">Pricing</h3>
          <p className="mt-2 text-4xl font-geist text-white/90 font-normal tracking-tighter sm:text-5xl">
            The right price for you{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
          <div className="max-w-xl">
            <p>
              Choose the plan that fits your needs best. Each plan is designed to cater to different team sizes and support levels.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div key={idx} className="flex flex-col border-y md:max-w-xs md:rounded-xl md:border md:border-x-none md:shadow-lg transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
              <div className="p-4 py-8 border-b md:p-8">
                <h4 className="text-lg text-gray-100 font-semibold">{plan.name}</h4>
                <p className="mt-2">{plan.desc}</p>
                <p className="mt-4">
                  <strong>Team Size:</strong> {plan.teamSize}<br />
                  <strong>Agents:</strong> {plan.agents}<br />
                  <strong>Team Leader:</strong> {plan.teamLeader}<br />
                  <strong>Operations Manager:</strong> {plan.operationsManager}<br />
                  <strong>Onboarding Manager:</strong> {plan.onboardingManager}<br />
                  <strong>CSM:</strong> {plan.csm}<br />
                  <strong>HR People Partner:</strong> {plan.hrPeoplePartner}<br />
                  <strong>Continuous Improvement:</strong> {plan.continuousImprovement}<br />
                  <strong>L&D Officer:</strong> {plan.ldOfficer}<br />
                  <strong>WFM:</strong> {plan.wfm}<br />
                  <strong>Quality Assurance:</strong> {plan.qualityAssurance}<br />
                  <strong>Buffer:</strong> {plan.buffer}<br />
                  <strong>PEX Free 40-hr Project:</strong> {plan.pexFreeProject}<br />
                  <strong>Billing Model:</strong> {plan.billingModel}
                </p>
              </div>
              <div className="p-4">
                <button className="w-full font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-purple-400 to-purple-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-purple-500/50">
                  Contact Sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
